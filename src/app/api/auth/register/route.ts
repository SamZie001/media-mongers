import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const POST = async (request: Request) => {
  const { username, email, password } = await request.json();
  const salt = await bcrypt.genSalt(12);
  await connect();

  // @ts-ignore
  const hashedPwd = await bcrypt.hash(password, salt);
  try {
    await User.create({ username, email, password: hashedPwd });
    return new NextResponse("Account has been created", { status: 201 });
  } catch (error: Error | any) {
    return new NextResponse(error.message, { status: 400 });
  }
};
