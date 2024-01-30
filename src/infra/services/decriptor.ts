import { resolve } from "bun";
import { User } from "../../domain/entities/user";
import { Decriptor } from "../../domain/providers/decriptor";

export class DefaultDecriptor implements Decriptor {
    public exec(user: User): Promise<string> {
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
            let catchPass = user.password.split("").map(e => {
                return e === 'A' ? '9' : alphabetNumber[alphabetNumber.indexOf(e) - 1]
            });
            let joinPass = catchPass.join('');
            resolve(joinPass).
        });
    }
}