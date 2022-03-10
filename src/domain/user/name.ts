export class Name {
    constructor(private readonly _value: string) {
        // TODO invariant
    }

    get value(): string {
        return this._value;
    }
}
