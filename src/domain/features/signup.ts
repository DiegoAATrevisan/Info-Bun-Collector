import { User } from "../entities/user";
import { Cypher } from "../providers/cypher";
import { CreateUserRepository } from "../repositories/create-user-repository";
type Input = User
type Output = Pick<User, "email">
export type Signup = (input: Input) => Promise<Output>
type SetupProps = {
    cypher: Cypher
    repository: CreateUserRepository
}
type Setup = (props: SetupProps) => Signup

export const SetupSignup: Setup = ({ cypher, repository }: SetupProps) => async (input) => {

    let user: User = {
        username: input.username,
        email: input.email,
        password: await cypher.exec(input.password)
    }
    let response = await repository.create(user);

    return { email: response.email }

}