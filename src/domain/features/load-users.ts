import { User } from "../entities/user"
import { LoadUsersRepository } from "../repositories/load-users-repository"

type Input = {}
type Output = Omit<User, "password">[]
export type LoadUser = (input: Input) => Promise<Output>
type SetupProps = {
    loadUserRepository: LoadUsersRepository
}
type Setup = (props: SetupProps) => LoadUser

export const SetupLoadUser: Setup = ({ loadUserRepository }: SetupProps) => async (input) => {
    let userList = (await loadUserRepository.load())
        .map((user) => ({
            email: user.email,
            username: user.username
        }))

    return userList;
}