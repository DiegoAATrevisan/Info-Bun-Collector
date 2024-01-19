export class User {
    private username: string;
    private name: string;
    private email: string;

    public constructor(username: string, name: string, email: string) {
        this.username = username;
        this.name = name;
        this.email = email;
    }

}