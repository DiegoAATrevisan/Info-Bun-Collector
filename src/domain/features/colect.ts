import { User } from "../entities/user";
import { reader } from "../providers/reader";
type Input = string
type Output = string
export type Colector = () => Promise<Output>
type SetupProps = {
    reader: reader,
    user: User
}
type Setup = (props: SetupProps) => Colector
console.log("teste");

export const SetupColector: Setup = ({ reader, user }: SetupProps) => async () => {
    var answerArray: object[] = [];
    answerArray.push(user.constructor(
        await reader.exec("Digite seu Username:"),
        await reader.exec("Digite seu Nome:"),
        await reader.exec("Digite seu Email:")
    ))
}