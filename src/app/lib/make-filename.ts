export const makeFilename = (date: Date): string => {
    return `data-${date.toISOString().slice(0, 10)}.json`;
};
