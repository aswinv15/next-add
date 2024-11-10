'use client';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs';
import Link from 'next/link';

import { History } from './history';
import { ThemeToggle } from './theme-toggle';
import { NavigationRisk } from '../navigationrisk';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';

// import { User } from '@/db/schema';

export const Navbar = () => {
  const user = useUser();

  return (
    <>
      <div className="bg-background absolute top-0 left-0 w-dvw py-2 px-3 justify-between flex flex-row items-center z-30">
        <div className="flex flex-row gap-3 items-center">
          {/* <SignedIn> */}
          <History user={user.user} />
          {/* </SignedIn> */}
          <div className="flex flex-row gap-2 items-center">
            <div className="text-sm dark:text-zinc-300">Next.js Chatbot</div>
          </div>
        </div>
        <NavigationRisk />
        <div className="flex flex-row gap-2 items-center">
          <UserButton />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};
