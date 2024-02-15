import { User } from "../../../../domain/entities/user";

export interface CreateUserAdapater {
    create: (user: User) => Promise<void>;

}