import { resolve } from "bun";
import { Cypher } from "../../domain/providers/cypher";

export class DefaultCypher implements Cypher {

    public exec(response: string): Promise<string> {
        let alphabetNumber = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];
        // for (let index = 0; index < splitedPass.length; index++) {
        //     if (splitedPass[index]==="9") {
        //         splitedPass[index]="a"
        //     } else {

        //     }

        // }
        return new Promise<string>((resolve) => {
            let splitedPass = response.split("").map(e => alphabetNumber[alphabetNumber.indexOf(e) + 1]);
            let encryptedPass = splitedPass.join('');
            resolve(encryptedPass);
        })
    }

}