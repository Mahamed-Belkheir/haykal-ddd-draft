export interface IHashService {
    hash(str: string): Promise<string>
    compare(str: string, hash: string): Promise<boolean>
}