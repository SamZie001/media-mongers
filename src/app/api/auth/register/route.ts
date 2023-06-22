import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const POST = async (request: Request | NextRequest) => {
  const { username, email, password } = await request.json();
  const salt = await bcrypt.genSalt(12);

  await connect();

  const hashedPwd = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashedPwd });
  try {
    await newUser.save();
    return new NextResponse("Account has been created", { status: 201 });
  } catch (error: Error | any) {
    return new NextResponse(error.message, { status: 400 });
  }
};
