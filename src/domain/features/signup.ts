import { User } from "../entities/user";
import { Cypher } from "../providers/cypher";
import { Reader } from "../providers/reader";
type Input = {}
type Output = void
export type Signup = (input: Input) => Promise<Output>
type SetupProps = {
    reader: Reader,
    cypher: Cypher

}
type Setup = (props: SetupProps) => Signup
var answerArray: User[] = [];

export const SetupSignup: Setup = ({ reader, cypher }: SetupProps) => async (Input) => {
    answerArray.push({
        username: await reader.exec("Digite seu Username:"),
        email: await reader.exec("Digite seu Email:"),
        password: await cypher.exec(await reader.exec("Digite seu Nome:"))
    })
    console.log(answerArray);

}