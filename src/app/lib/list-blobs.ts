import { list } from "@vercel/blob";

export const listBlobs = async () => {
    const { blobs } = await list();
    return blobs;
};
