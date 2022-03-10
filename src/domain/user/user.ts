import { Id } from './id';
import { Name } from './name';
import { Primitives } from './primitives';

export class User {
    private constructor(private readonly _primitives: Primitives) {}

    get primitives(): Primitives {
        return this._primitives;
    }

    get id() {
        return this.primitives.id;
    }

    get name() {
        return this.primitives.name;
    }

    static reconstruct(primitives: Primitives) {
        return new User(primitives);
    }

    static create(name: Name) {
        const primitives = new Primitives(Id.new(), name);
        return new User(primitives);
    }

    update(name: Name) {
        const primitives = new Primitives(this.id, name);
        return new User(primitives);
    }
}
