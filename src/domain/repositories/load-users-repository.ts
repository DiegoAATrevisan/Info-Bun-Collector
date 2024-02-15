import { User } from "../entities/user";

export interface LoadUsersRepository {
    load: () => Promise<User[]>
}