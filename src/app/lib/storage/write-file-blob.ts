import { put } from "@vercel/blob";

export const writeFileBlob = async (data: Data, filename: string) => {
    console.log(`Writing ${filename} to blob store...`)
    const blob = await put(filename, JSON.stringify(data), { access: "public", allowOverwrite: true, addRandomSuffix: true });
    console.log(`Successfully written ${filename} to blob store.`)
    return blob;
};
