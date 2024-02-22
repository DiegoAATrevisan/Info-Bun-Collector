import { User } from "../../../../domain/entities/user";

export interface FindUserAdapter {
    find: (key: keyof User, value: string) => Promise<User>
}