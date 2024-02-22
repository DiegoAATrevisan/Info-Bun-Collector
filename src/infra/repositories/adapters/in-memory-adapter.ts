import { User } from "../../../domain/entities/user";
import { CreateUserAdapter } from "./types/create-user-adapter";
import { FindUserAdapter } from "./types/find-user-adapter";
import { LoadUserAdapter } from "./types/load-user-adapter";

export class InMemoryAdapter implements LoadUserAdapter, CreateUserAdapter, FindUserAdapter {
    private users: User[] = []

    public async load(): Promise<User[]> {
        return this.users;
    }
    public async create(user: User): Promise<void> {
        this.users.push(user);
    }

    public async find(key: keyof User, value: string): Promise<User> {
        const data = this.users.find((user) => user[key] == value)
        if (data == undefined) {
            throw new Error("User not found in database with the value: " + value)
        }
        return data
    }
}

export const IN_MEMORY_ADAPTER = new InMemoryAdapter();