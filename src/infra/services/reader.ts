import * as readline from 'readline';
import { reader } from '../../domain/providers/reader';

export class DefaultReader implements reader {
    public exec(question: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise<string>((resolve) => {
            rl.question(question, (answer) => {
                console.log(`Salvamos "${answer}"`);
                rl.close();
                resolve(answer);
            });
        });
    }
}
