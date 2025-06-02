import { listBlobs } from "@/app/lib/list-blobs";
import { NextResponse } from "next/server";

export const GET = async () => {
    const blobs = await listBlobs();
    blobs.sort((a, b) => b.pathname.localeCompare(a.pathname));
    
    return NextResponse.json(blobs);
};
