import { NextResponse } from "next/server";
import connect from "@/utils/db";
import mongoose from "mongoose";
import paramInterface from "@/interfaces/IdParam";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest, { params }: paramInterface) => {
  const { id } = params;

  try {
    await connect();
    let Post = mongoose.model("post");
    const post: object | null | undefined = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
