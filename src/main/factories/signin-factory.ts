import { SetupSignin, Signin } from "../../domain/features/signin";
import { IN_MEMORY_ADAPTER } from "../../infra/repositories/adapters/in-memory-adapter";
import { UsersRepository } from "../../infra/repositories/users-repository";
import { DefaultDecriptor } from "../../infra/services/decriptor";

export const signinService: Signin = SetupSignin({
    decriptor: new DefaultDecriptor,
    repository: new UsersRepository(IN_MEMORY_ADAPTER)
})