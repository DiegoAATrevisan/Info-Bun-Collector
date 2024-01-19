export interface Reader {
    exec: (question: string) => Promise<string>;
}