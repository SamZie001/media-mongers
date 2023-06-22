import { NextApiRequest } from "next";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const POST = async (request: NextApiRequest) => {
  const { username, email, password } = request.body;
  console.log("mybody: ", { username, email, password });
  await connect();

  // @ts-ignore
  const hashedPwd = await bcrypt.hash(password, process.env.PWD_SECRET);
  try {
    await User.create({ username, email, password: hashedPwd });
    return new NextResponse("Account has been created", { status: 201 });
  } catch (error: Error | any) {
    return new NextResponse(error.message, { status: 400 });
  }
};
