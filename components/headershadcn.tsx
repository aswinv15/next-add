import Image from 'next/image';
import * as React from 'react';
import { NavigationRisk } from './navigationrisk';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between max-w-full h-16 px-4 border-b shrink-0 bg-white">
      <div className="flex items-center text-sky-500 text-lg ">
        <React.Suspense
          fallback={<div className="flex-1 overflow-auto" />}
        ></React.Suspense>
      </div>
      <NavigationRisk />
      <div className="flex items-center justify-end space-x-2">
        <ThemeToggle />
        <button className="text-sky-500 font-semibold  p-1 flex items-center space-x-2 ">
          <div className="relative flex  size-13 items-center  justify-center rounded-full">
            <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <Image
                className="mx-auto bg-white  justify-center rounded-full p-1.5"
                src="/assets/logo-4.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
