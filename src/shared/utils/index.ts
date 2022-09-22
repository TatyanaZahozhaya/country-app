const findIndex = (str: string) => {
    return str.indexOf('-', 0)
}
export const cutName = (str: string) => {
    return str.slice(findIndex(str) + 1, str.length);
}

export const cutCode = (str: string) => {
    return str.slice(0, findIndex(str));
}