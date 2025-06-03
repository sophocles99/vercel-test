import { listBlobs } from "@/app/lib/storage/list-blobs";
import { NextResponse } from "next/server";

export const GET = async () => {
    const blobs = await listBlobs();
    console.log({ blobs });
    const blobsSorted = [...blobs.sort((a, b) => b.pathname.localeCompare(a.pathname))];
    console.log({ blobsSorted });
    return NextResponse.json(blobs);
};
