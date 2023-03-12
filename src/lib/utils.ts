export function customPageTitleToPath(title: string): string {
    return encodeURIComponent(title.toLowerCase());;
}

export function unique<T>(value: T, index: number, array: T[]): boolean {
    return array.indexOf(value) === index;
}