const findIndex = (str: string) => {
    return str.indexOf('-', 0);
};
export const getName = (str: string) => {
    return str.slice(findIndex(str) + 1, str.length);
};

export const getCode = (str: string) => {
    return str.slice(0, findIndex(str));
};

export const isIdMatch = (str: string) => {
    const reg = /([0-9]){3}-([a-z])\w+/g;
    const strFormated = str.toLowerCase();
    const arr = strFormated.match(reg);
    const newStr = arr?.find((item) => item === strFormated);
    if (!newStr) {
        return false;
    }
    return true;
};
