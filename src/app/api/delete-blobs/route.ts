import { list, del } from "@vercel/blob";
import { NextResponse } from "next/server";

export const GET = async () => {
    const { blobs } = await list();
    const pathNames = blobs.map((blob) => blob.pathname);
    await del(pathNames);
    return NextResponse.json({ deletedBlobs: pathNames });
};
