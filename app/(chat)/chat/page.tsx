// eslint-disable-next-line import/no-unresolved
import { Chat } from "@/components/custom/chat";
// eslint-disable-next-line import/no-unresolved
import { generateUUID } from "@/lib/utils";

export default async function Page() {
  const id = generateUUID();
  return <Chat key={id} id={id} initialMessages={[]} />;
}