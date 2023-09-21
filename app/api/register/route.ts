import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //  console.log("register")
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { name, username, email, password } = await req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name,
        username: username,
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    console.log("User created:", user);
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    return res.status(400).end();
  }
}
