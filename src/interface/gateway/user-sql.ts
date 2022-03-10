import { UserEntity } from './user-entity';

export interface UserSql {
    insert(user: UserEntity): Promise<void>;
    select(id: string): Promise<UserEntity>;
}
