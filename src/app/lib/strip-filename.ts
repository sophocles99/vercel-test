export const stripFilename = (filename: string): string => {
    return filename.replace(/^data-/, "").split(".")[0];
};
