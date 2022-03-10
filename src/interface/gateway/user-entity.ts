import { User } from '@/domain/user/index';

export class UserEntity {
    constructor(readonly id: string, readonly name: string) {}

    static of(user: User.Primitives): UserEntity {
        return new UserEntity(user.id.value, user.name.value);
    }

    toPrimitives() {
        return new User.Primitives(new User.Id(this.id), new User.Name(this.name));
    }
}
