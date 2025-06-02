import { NextResponse } from "next/server";
import dummyData from "./dummyData.json";

export const GET = async () => {
    return NextResponse.json(dummyData);
};
