export const makeRandomDate = (): Date => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const startOfYear = new Date(currentYear, 0, 1, 0, 0, 0, 0);

    const timeDifference = today.getTime() - startOfYear.getTime();
    const randomOffset = Math.random() * timeDifference;

    const randomDate = new Date(startOfYear.getTime() + randomOffset);
    randomDate.setHours(0);
    randomDate.setMinutes(0);
    randomDate.setSeconds(0);
    randomDate.setMilliseconds(0);

    return randomDate;
};
