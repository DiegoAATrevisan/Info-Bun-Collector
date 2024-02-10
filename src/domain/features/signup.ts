import { User } from "../entities/user";
import { Cypher } from "../providers/cypher";
import { Decriptor } from "../providers/decriptor";
type Input = User
type Output = Pick<User, "email">
export type Signup = (input: Input) => Promise<Output>
type SetupProps = {
    cypher: Cypher
    decriptor: Decriptor
}
type Setup = (props: SetupProps) => Signup
var answerArray: User[] = [];

export const SetupSignup: Setup = ({ cypher, decriptor }: SetupProps) => async (input) => {
    
    let user: User = {
        username: input.username,
        email: input.email,
        password: await cypher.exec(input.password)
    }
    answerArray.push(user)
    console.log(answerArray.map(e => ({
        ...e,
        decriptedPassword: decriptor.exec(user)
    })));


    return { email: user.email }

}