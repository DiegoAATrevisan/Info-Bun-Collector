import { User } from "../../domain/entities/user";
import { CreateUserRepository } from "../../domain/repositories/create-user-repository";
import { LoadUsersRepository } from "../../domain/repositories/load-users-repository";
import { CreateUserAdapater } from "./adapters/types/create-user-adapter";
import { LoadUserAdapter } from "./adapters/types/load-user-adapter";

export class UsersRepository implements LoadUsersRepository, CreateUserRepository {
    constructor(
        private readonly adapter: LoadUserAdapter & CreateUserAdapater,
    ) { }

    public async load(): Promise<User[]> {
        try {
            const users = await this.adapter.load();
            return users
        } catch (error) {

            return [];
        }
    }


    public async create(user: User): Promise<Pick<User, "email">> {
        await this.adapter.create(user)
        return {
            email: user.email
        }
    }
}
