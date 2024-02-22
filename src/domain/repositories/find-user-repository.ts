import { User } from "../entities/user";

export interface FindUserRepository {
    findByEmail: (user: Pick<User, "email">) => Promise<User>
}