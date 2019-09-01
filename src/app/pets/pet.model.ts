import { Owner } from '../owners/owner.model';

export class Pet {
    public type: string; // dog, cat, bird, etc.
    public name: string;
    public fed: boolean;

    // , owners: Owner[]

    constructor(type: string, name: string) {
        this.type = type;
        this.name = name;
        this.fed = false;
    }
}