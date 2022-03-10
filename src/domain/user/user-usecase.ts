export interface UserUsecaseInput {}

export interface UserUsecaseOutput {}

export interface UserUsecase {
    execute(input: UserUsecaseInput): Promise<UserUsecaseOutput>;
}
