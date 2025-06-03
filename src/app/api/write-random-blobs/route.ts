import { makeRandomDate } from "@/app/api/write-random-blobs/make-random-date";
import dummyData from "@/app/lib/dummyData.json";
import { getFilenameFromDate } from "@/app/lib/storage/get-filename-from-date";
import { writeFileBlob } from "@/app/lib/storage/write-file-blob";
import { NextResponse } from "next/server";

export const GET = async () => {
    const blobs = [];
    for (let i = 0; i < 5; i++) {
        const randomDate = makeRandomDate();
        const randomDateString = randomDate.toISOString();

        const data = { ...dummyData };
        data.date = randomDateString;

        const filename = getFilenameFromDate(randomDate);
        const blob = await writeFileBlob(data, filename);
        blobs.push(blob);
    }

    return NextResponse.json(blobs);
};
