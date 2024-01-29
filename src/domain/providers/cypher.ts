export interface Cypher{
    exec: (response: string)=> Promise<string>;
}