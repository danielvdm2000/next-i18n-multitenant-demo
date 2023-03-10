export function customPageTitleToPath(title: string): string {
    return encodeURIComponent(title.toLowerCase());;
}