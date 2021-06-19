export class User {
    id?: number;
    name: string;
    doc: string;
    profile: string;

    constructor(name: string, doc: string, profile: string) {
        this.name = name;
        this.doc = doc;
        this.profile = profile;
    }

}