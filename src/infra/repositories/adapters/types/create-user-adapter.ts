import { User } from "../../../../domain/entities/user";

export interface CreateUserAdapter {
    create: (user: User) => Promise<void>;

}