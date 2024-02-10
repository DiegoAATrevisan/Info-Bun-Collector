import * as fs from "node:fs";

type LoggerProps = {
    path: string,
    body: any
}

export const Logger = (input: LoggerProps) => {
    fs.appendFile("./Logs.txt", `Received a request at ${input.path} with the content ${JSON.stringify(input.body)}` + "\n", () => { })
}