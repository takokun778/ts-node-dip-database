import { Id } from './id';
import { Name } from './name';

export class Primitives {
    constructor(private readonly _id: Id, private readonly _name: Name) {}

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}
