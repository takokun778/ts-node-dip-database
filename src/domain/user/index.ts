import * as domain from './user';
import * as primitives from './primitives';
import * as id from './id';
import * as name from './name';
import * as repository from './user-repository';
import * as usecase from './user-usecase';

export namespace User {
    export import Domain = domain.User;
    export import Primitives = primitives.Primitives;
    export import Id = id.Id;
    export import Name = name.Name;
    export import Repository = repository.UserRepository;
    export import Usecase = usecase.UserUsecase;
    export import UsecaseInput = usecase.UserUsecaseInput;
    export import UsecaseOutput = usecase.UserUsecaseOutput;
}
