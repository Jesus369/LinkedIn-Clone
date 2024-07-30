"use server";

import { currentUser } from "@clerk/nextjs/server";

export default async function createPostAction(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not authenticated!");
  }

  const postInput = formData.get("postInput") as string;
  const formImage = formData.get("image") as File;

  let imageUrl: string | undefined;
  if (!postInput) {
    throw new Error("Post input is required!");
  }

  // Define user
  // Upload image if there is one
  // Create post in database
  // Revalidate path "/" to homepage
}
