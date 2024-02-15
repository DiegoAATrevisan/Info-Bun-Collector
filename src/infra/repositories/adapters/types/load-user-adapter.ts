import { User } from "../../../../domain/entities/user";

export interface LoadUserAdapter {
    load: () => Promise<User[]>
}