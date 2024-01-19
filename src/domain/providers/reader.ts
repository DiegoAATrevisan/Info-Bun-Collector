export interface reader {
    exec: (question: string) => Promise<string>;
}