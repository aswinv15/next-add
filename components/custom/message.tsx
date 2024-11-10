"use client";

import { Attachment, ToolInvocation } from "ai";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from 'next/image'
import { BotIcon, UserIcon } from "./icons";
import { Markdown } from "./markdown";
import { PreviewAttachment } from "./preview-attachment";
import { Weather } from "./weather";
import { FaUserLarge } from "react-icons/fa6"; //backup keep this for backup okay
import { FcSms  } from "react-icons/fc"; //message icon blue color erukanu okay
export const Message = ({
  role,
  content,
  toolInvocations,
  attachments,
}: {
  role: string;
  content: string | ReactNode;
  toolInvocations: Array<ToolInvocation> | undefined;
  attachments?: Array<Attachment>;
}) => {
  return (
    <motion.div
      className={`flex flex-row gap-4 px-4 w-full md:w-[750px] md:px-0 first-of-type:pt-20 `}
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="size-[24px] flex flex-col justify-center items-center shrink-0 mr-3 mt-6 ">
        {role === "assistant" ? (
          <div className="relative flex  size-11 items-center  justify-center rounded-full">
            <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
            <Image
              className="mx-auto bg-white  justify-center rounded-full p-1.5"
              src="/assets/logo-4.png"
              alt="logo"
              width={200}
              height={200}
            />
            </div>
          </div>
        )   : (
          <div className="relative flex  size-11 items-center  justify-center rounded-full">
          <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
            <div className="flex items-center mx-auto bg-white size-10 justify-center rounded-full p-1.5">
           <FcSms className="size-6" />
          </div>
          </div>
        </div>
      )}
      </div>

      <div className="flex flex-col gap-2 w-full  bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg rounded-3xl p-0.5">
        <div className="bg-white dark:bg-slate-800 rounded-3xl">

        
        {content && (
          <div className="text-zinc-800 dark:text-zinc-300 flex flex-col gap-4 p-4  ">
            <Markdown>{content as string}</Markdown>
          </div>
          
        )}
   

        {toolInvocations && (
          <div className="flex flex-col gap-4 ">
            {toolInvocations.map((toolInvocation) => {
              const { toolName, toolCallId, state } = toolInvocation;

              if (state === "result") {
                const { result } = toolInvocation;

                return (
                  <div key={toolCallId}>
                    {toolName === "getWeather" ? (
                      <Weather weatherAtLocation={result} />
                    ) : null}
                  </div>
                );
              } else {
                return (
                  <div key={toolCallId} className="skeleton ">
                    {toolName === "getWeather" ? <Weather /> : null}
                  </div>
                );
              }
            })}
          </div>
        )}

        {attachments && (
          <div className="flex flex-row gap-2 ">
            {attachments.map((attachment) => (
              <PreviewAttachment key={attachment.url} attachment={attachment} />
            ))}
          </div>
        )}
        </div>
      </div>
     
    </motion.div>
  );
};
