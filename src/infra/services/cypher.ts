import { Cypher } from "../../domain/providers/cypher";

export class DefaultCypher implements Cypher {

    public exec(response: string): Promise<string> {
        let alphabetNumber = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
            '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];


        return new Promise<string>((resolve) => {
            let splitedPass = response.split("").map(e => {
                return e === '9' ? 'A' : alphabetNumber[alphabetNumber.indexOf(e) + 1]
            });
            let encryptedPass = splitedPass.join('');
            resolve(encryptedPass);
        })
    }

}