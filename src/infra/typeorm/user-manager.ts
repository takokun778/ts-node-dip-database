import { EntityManager, getManager } from 'typeorm';
import { User } from './entity/user';
import { UserSql } from '@/interface/gateway/user-sql';
import { UserEntity } from '@/interface/gateway/user-entity';

export class UserManager implements UserSql {
    private readonly manager: EntityManager;

    constructor() {
        this.manager = getManager();
    }

    async insert(user: UserEntity): Promise<void> {
        const entity = new User();
        entity.id = user.id;
        entity.name = user.name;
        await this.manager.save([entity]);
    }

    async select(id: string): Promise<UserEntity> {
        const entity = await this.manager.findOne(User, id);
        if (!entity) {
            throw new Error('Not Found');
        }
        return new UserEntity(entity.id, entity.name);
    }
}
