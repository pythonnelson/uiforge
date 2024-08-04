"use server";

import mongoose from "mongoose";

export async function Connect(): Promise<void> {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Failed to connect", error);
  }
}
