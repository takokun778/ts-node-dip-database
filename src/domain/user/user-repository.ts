import { Id } from './id';
import { Primitives } from './primitives';

export interface UserRepository {
    save(user: Primitives): Promise<void>;
    find(id: Id): Promise<Primitives>;
}
