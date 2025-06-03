import { listBlobs } from "@/app/lib/storage/list-blobs";
import { NextResponse } from "next/server";

export const GET = async () => {
    const blobs = await listBlobs();
    return NextResponse.json(blobs);
};
