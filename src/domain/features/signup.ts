import { password } from "bun";
import { User } from "../entities/user";
import { Cypher } from "../providers/cypher";
import { Decriptor } from "../providers/decriptor";
import { Reader } from "../providers/reader";
type Input = {}
type Output = void
export type Signup = (input: Input) => Promise<Output>
type SetupProps = {
    reader: Reader,
    cypher: Cypher
    decriptor: Decriptor
}
type Setup = (props: SetupProps) => Signup
var answerArray: User[] = [];

export const SetupSignup: Setup = ({ reader, cypher, decriptor }: SetupProps) => async (Input) => {
    let user: User = {
        username: await reader.exec("Digite seu Username:"),
        email: await reader.exec("Digite seu Email:"),
        password: await cypher.exec(await reader.exec("Digite sua senha:"))
    }
    answerArray.push(user)
    console.log(answerArray.map(e => ({
        ...e,
        decriptedPassword: decriptor.exec(user)
    })));


}