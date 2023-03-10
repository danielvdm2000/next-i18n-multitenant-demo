export function customPageTitleToPath(title: string): string {
    // console.log(`customPageTitleToPath("${title}")`);

    const result = encodeURIComponent(title.toLowerCase());;

    // console.log(`- ${result}`)

    return result;
}