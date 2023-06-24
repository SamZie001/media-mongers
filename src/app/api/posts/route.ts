import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextApiRequest } from "next";

export const GET = async (req: Request | NextApiRequest) => {
  try {
    await connect();
    const posts: object | null | undefined = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
