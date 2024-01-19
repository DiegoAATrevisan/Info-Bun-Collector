import { reader } from "../providers/reader";
type Input = string
type Output = string
type Colector = (Input: Input) => Promise<Output>
type SetupProps = {
    reader: reader
}
type Setup = (props: SetupProps) => Colector

const SetupColector: Setup = ({ reader }: SetupProps) => async (input) => {
    var answerArray: string[] = [];
    answerArray.push(await reader.exec("Digite seu Username:"));
    answerArray.push(await reader.exec("Digite seu Nome:"));
    answerArray.push(await reader.exec("Digite seu Email:"));
}