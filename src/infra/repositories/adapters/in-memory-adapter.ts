import { User } from "../../../domain/entities/user";
import { CreateUserAdapater } from "./types/create-user-adapter";
import { LoadUserAdapter } from "./types/load-user-adapter";

export class InMemoryAdapter implements LoadUserAdapter, CreateUserAdapater {
    private users: User[] = []
    public async load(): Promise<User[]> {
        return this.users;
    }
    public async create(user: User): Promise<void> {
        this.users.push(user);
    }
}

export const IN_MEMORY_ADAPTER = new InMemoryAdapter();