import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { MongoClient } from "mongodb";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }
  if (!DATABASE_URL) {
    throw new Error("Please add DATABASE_URL to .env or .env.local");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const { id, ...userData } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  if (eventType === "user.created") {
    try {
      const client = new MongoClient(DATABASE_URL);
      await client.connect();
      const db = client.db(); // Connect to the default database
      const usersCollection = db.collection("users");

      const newUser = {
        clerkId: id,
        ...userData,
        createdAt: new Date(),
      };

      await usersCollection.insertOne(newUser);
      await client.close();

      console.log("New user saved to MongoDB:", newUser);
    } catch (err) {
      console.error("Error saving new user to MongoDB:", err);
      return new Response("Error occurred while saving user", {
        status: 500,
      });
    }
  }

  return new Response("", { status: 200 });
}
