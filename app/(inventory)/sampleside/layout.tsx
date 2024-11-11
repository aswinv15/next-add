'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Down } from '@/app/(inventory)/sampleside/Drow';
import Link from 'next/link';
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
];

export default function Example({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className=" bg-cyan-700">
        <nav
          aria-label="Global"
          className=" p-6 flex justify-between items-center "
        >
          <div className=" ">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/assets/logo1.png"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
        
          <div className="flex justify-evenly gap-10 mr-20 ">
          <Down />
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=" flex justify-center text-lg font-semibold text-gray-900"
              >
                {item.name}
              </Link>
            ))}
           
          </div>
          {/* <div className="py-6 mr-10">
           
          </div> */}
            
        </nav>
      </header>

      <div className='p-5'>{children}</div>
    </div>
  );
}
