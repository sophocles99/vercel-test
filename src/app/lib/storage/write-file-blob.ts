import { put } from "@vercel/blob";

export const writeFileBlob = async (data: Data, filename: string) => {
    const blob = await put(filename, JSON.stringify(data), { access: "public", allowOverwrite: true, addRandomSuffix: true });
    return blob;
};
