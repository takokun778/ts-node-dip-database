import { User } from '@/domain/user';

export class UserInteractorCreateInput implements User.UsecaseInput {
    constructor(public name: User.Name) {}
}

export class UserInteractorCreateOutput implements User.UsecaseOutput {
    constructor(public user: User.Primitives) {}
}

export class UserInteractorCreate {
    constructor(private readonly userRepository: User.Repository) {}

    async execute(input: UserInteractorCreateInput): Promise<UserInteractorCreateOutput> {
        const user = User.Domain.create(input.name);

        await this.userRepository.save(user.primitives);

        const output = new UserInteractorCreateOutput(user.primitives);

        return output;
    }
}
