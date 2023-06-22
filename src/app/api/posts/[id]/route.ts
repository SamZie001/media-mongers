import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import paramInterface from "@/interfaces/IdParam";

export const GET = async (req: object, { params }: paramInterface) => {
  const {id} = params

  try {
    await connect();
    const post: object | null | undefined = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
