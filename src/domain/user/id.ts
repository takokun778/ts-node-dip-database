import { v4 as uuid } from 'uuid';

export class Id {
    constructor(private readonly _value: string) {
        // TODO invariant
    }

    get value(): string {
        return this._value;
    }

    static new() {
        return new Id(uuid());
    }
}
