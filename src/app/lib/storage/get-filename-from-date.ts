export const getFilenameFromDate = (date: Date): string => {
    return `${date.toISOString().slice(0, 10)}.json`;
};
