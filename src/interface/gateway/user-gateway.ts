import { User } from '@/domain/user/index';
import { UserEntity } from './user-entity';
import { UserSql } from './user-sql';

export class UserGateway implements User.Repository {
    constructor(private readonly sql: UserSql) {}

    async save(user: User.Primitives) {
        await this.sql.insert(UserEntity.of(user));
    }

    async find(id: User.Id) {
        const entity = await this.sql.select(id.value);
        return entity.toPrimitives();
    }
}
