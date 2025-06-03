export const getDateFromFilename = (filename: string): Date => {
    // Assuming filename starts with date in YYYY-MM-DD format and ends with .json
    const strippedFilename = filename.replace(".json", "").slice(0, 10);
    return new Date(strippedFilename);
};
