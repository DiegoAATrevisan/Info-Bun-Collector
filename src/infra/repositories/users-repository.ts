import { User } from "../../domain/entities/user";
import { CreateUserRepository } from "../../domain/repositories/create-user-repository";
import { FindUserRepository } from "../../domain/repositories/find-user-repository";
import { LoadUsersRepository } from "../../domain/repositories/load-users-repository";
import { CreateUserAdapter } from "./adapters/types/create-user-adapter";
import { FindUserAdapter } from "./adapters/types/find-user-adapter";
import { LoadUserAdapter } from "./adapters/types/load-user-adapter";

export class UsersRepository implements LoadUsersRepository, CreateUserRepository, FindUserRepository {
    constructor(
        private readonly adapter: LoadUserAdapter & CreateUserAdapter & FindUserAdapter,
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

    public async findByEmail(user: Pick<User, "email">): Promise<User> {
        try {
            const findedUser = await this.adapter.find("email", user.email)
            return findedUser
        } catch (error) {
            throw new Error(`Error on finding the user by email ${user.email}`)
        }
    }
}