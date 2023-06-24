import connect from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const POST = async (request: Request | NextRequest) => {
  const { name, email, password } = await request.json();
  const salt = await bcrypt.genSalt(12);
  const hashedPwd = await bcrypt.hash(password, salt);

  try {
    await connect();
    await User.create({ name, email, password: hashedPwd });
    return new NextResponse("Account has been created", { status: 201 });
  } catch (error: Error | any) {
    console.log(error.message);
    return new NextResponse(error.message, { status: 400 });
  }
};
