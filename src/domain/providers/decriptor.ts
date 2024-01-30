import { User } from "../entities/user";

export interface Decriptor {
    exec: (user: User) => Promise<string>;
}