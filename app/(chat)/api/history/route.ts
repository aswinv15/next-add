// import { auth } from "@/app/(auth)/auth";
import { auth } from '@clerk/nextjs/server';

import { getChatsByUserId } from '@/db/queries';

export async function GET() {
  const { userId } = auth();
  // const session = await auth();

  if (!userId) {
    return Response.json('Unauthorized!', { status: 401 });
  }

  const chats = await getChatsByUserId({ id: userId });
  return Response.json(chats);
}
