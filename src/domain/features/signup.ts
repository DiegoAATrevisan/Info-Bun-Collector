import { User } from "../entities/user";
import { Reader } from "../providers/reader";
type Input = {}
type Output = void
export type Signup = (input: Input) => Promise<Output>
type SetupProps = {
    reader: Reader,
}
type Setup = (props: SetupProps) => Signup
var answerArray: User[] = [];

export const SetupSignup: Setup = ({ reader }: SetupProps) => async (Input) => {
    answerArray.push({
        username: await reader.exec("Digite seu Username:"),
        email: await reader.exec("Digite seu Email:"),
        password: await reader.exec("Digite seu Nome:")
    })
    console.log(answerArray);

}