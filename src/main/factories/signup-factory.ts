import { Signup, SetupSignup } from "../../domain/features/signup";
import { IN_MEMORY_ADAPTER } from "../../infra/repositories/adapters/in-memory-adapter";
import { UsersRepository } from "../../infra/repositories/users-repository";
import { DefaultCypher } from "../../infra/services/cypher";

export const signupService: Signup = SetupSignup({
    cypher: new DefaultCypher,
    repository: new UsersRepository(IN_MEMORY_ADAPTER)
})
