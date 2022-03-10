import { UserSql } from '@/interface/gateway/user-sql';
import { UserEntity } from '@/interface/gateway/user-entity';
import { PrismaClient } from '@prisma/client';

export class UserPrisma implements UserSql {
    private readonly client: PrismaClient;
    
    constructor() {
        this.client = new PrismaClient();
    }

    async insert(user: UserEntity): Promise<void> {
        await this.client.user.create({
            data: {
                id: user.id,
                name: user.name
            }
        })
    }

    async select(id: string): Promise<UserEntity> {
        const result = await this.client.user.findFirst({
            where: {
                id: id,
            }
        })
        if (!result) {
            throw new Error('Not Found');
        }
        return new UserEntity(result.id, result.name);
    }
}
