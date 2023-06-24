import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req: Request | NextRequest) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const query = username ? { username: username } : {};
    const posts = await Post.find(query);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (req: Request | NextRequest) => {
  const { title, desc, img, content, username } = await req.json();
  try {
    await connect();
    await Post.create({ title, desc, img, content, username });
    return new NextResponse("Post Created", { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
