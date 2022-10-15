export const getMobileURL = (url: string) => {
    return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia') : '';
}

export const checkYear = (year: string) => {
    const currentYear = new Date().getFullYear();

    if (isNaN(+year) || +year < 1950 || +year > currentYear) {
        return String(currentYear);
    }

    return year;
}

export const roundCheck = (round: number) => {
    if (round >= 100) {
        return 1;
    }

    return round;
}

export const paginationOptions = (elements: number = -1, page: number = 1) => {
    const offset: number = (page - 1) * elements;
    const limit: number = elements;
    return `limit=${limit}&offset=${offset}`;
}