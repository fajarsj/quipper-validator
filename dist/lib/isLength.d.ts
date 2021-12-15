export interface Options {
    min?: number;
    max?: number;
    ignoreWhitespace?: boolean;
}
declare const isLength: (str: string, options?: Options) => boolean;
export default isLength;
