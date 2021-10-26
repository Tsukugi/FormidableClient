export const isArray = <T>(value: T | T[]): value is T[] => !!Array.isArray(value);
export const has = <K extends string>(key: K, x: object): x is { [key in K]: string } => key in x;
