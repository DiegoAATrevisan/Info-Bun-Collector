import { User } from "../entities/user";

export interface Decriptor {
    exec: (password: string) => string;
}