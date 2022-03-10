import { User } from '@/domain/user';

export class UserInteractorReadInput implements User.UsecaseInput {
    constructor(public id: User.Id) {}
}

export class UserInteractorReadOutput implements User.UsecaseOutput {
    constructor(public user: User.Primitives) {}
}

export class UserInteractorRead {
    constructor(private readonly userRepository: User.Repository) {}

    async execute(input: UserInteractorReadInput): Promise<UserInteractorReadOutput> {
        const user = await this.userRepository.find(input.id);

        const output = new UserInteractorReadOutput(user);

        return output;
    }
}
