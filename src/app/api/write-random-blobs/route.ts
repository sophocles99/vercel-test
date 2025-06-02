import dummyData from "@/app/lib/dummyData.json";
import { makeFilename } from "@/app/lib/make-filename";
import { makeRandomDate } from "@/app/lib/make-random-date";
import { writeFileBlob } from "@/app/lib/write-file-blob";
import { NextResponse } from "next/server";

export const GET = async () => {
    const blobs = [];
    for (let i = 0; i < 5; i++) {
        const randomDate = makeRandomDate();
        const randomDateString = randomDate.toISOString();

        const data = { ...dummyData };
        data.date = randomDateString;

        const filename = makeFilename(randomDate);
        const blob = await writeFileBlob(data, filename);
        blobs.push(blob);
    }

    return NextResponse.json(blobs);
};
