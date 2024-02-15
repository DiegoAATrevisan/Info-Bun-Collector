import { LoadUser, SetupLoadUser } from "../../domain/features/load-users";
import { IN_MEMORY_ADAPTER } from "../../infra/repositories/adapters/in-memory-adapter";
import { UsersRepository } from "../../infra/repositories/users-repository";

export const loadUsersService: LoadUser = SetupLoadUser({
    loadUserRepository: new UsersRepository(IN_MEMORY_ADAPTER)
})
