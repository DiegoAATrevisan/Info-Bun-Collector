import { Decriptor } from "../providers/decriptor"
import { FindUserRepository } from "../repositories/find-user-repository"

type Input = {
    email: string
    password: string
}
type Output = boolean
export type Signin = (input: Input) => Promise<Output>
type SetupProps = {
    decriptor: Decriptor
    repository: FindUserRepository
}
type Setup = (props: SetupProps) => Signin

export const SetupSignin: Setup = ({ decriptor, repository }: SetupProps) => async (input) => {
    try {
        const data = await repository.findByEmail({ email: input.email})
        const compareData = {
            password: decriptor.exec(data.password)
        }
        return input.password == compareData.password
    } catch (error) {
        return false
    }
}