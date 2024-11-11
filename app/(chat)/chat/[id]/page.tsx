import { auth } from '@clerk/nextjs/server';
import { CoreMessage } from "ai";
import { notFound } from "next/navigation";

// import { auth } from "@/app/(auth)/auth";
// eslint-disable-next-line import/no-unresolved
import { Chat as PreviewChat } from "@/components/custom/chat";
// eslint-disable-next-line import/no-unresolved
import { getChatById } from "@/db/queries";
// eslint-disable-next-line import/no-unresolved
import { Chat } from "@/db/schema";
// eslint-disable-next-line import/no-unresolved
import { convertToUIMessages} from "@/lib/utils";

export default async function Page({ params }: { params: any }) {
  const { id } = params;

  const chatFromDb = await getChatById({ id });

  if (!chatFromDb) {
    notFound();
  }

  // type casting
  const chat: Chat = {
    ...chatFromDb,
    messages: convertToUIMessages(chatFromDb.messages as Array<CoreMessage>),
  };

    const { userId } = auth();
  // const session = await auth();

  if (!userId) {
    return notFound();
  }

  if (userId !== chat.userId) {
    return notFound();
  }

  return <PreviewChat id={chat.id} initialMessages={chat.messages} />;
}
