import { User } from "../entities/user";

export interface CreateUserRepository {
    create: (user: User) => Promise<Pick<User, "email">>
}