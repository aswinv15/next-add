'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { BsBoxes } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { HiOutlineTruck } from 'react-icons/hi2';
import { FaBoxArchive } from 'react-icons/fa6';
import { GrGroup } from 'react-icons/gr';
import { IoIosLock } from 'react-icons/io';
import { FaDatabase } from 'react-icons/fa';
import { LuNetwork } from 'react-icons/lu';
import { PiWarehouseBold } from 'react-icons/pi';

const components: { title: string; href: string; icon: any }[] = [
  {
    title: 'Box',
    href: '/sampleside/assetsconstraints',
    icon: <BsBoxes className="size-5" />
  },
  {
    title: 'Map',
    href: '/sampleside/customconstraints',
    icon: <GrMapLocation className="size-5" />
  },
  {
    title: 'Truck',
    href: '/sampleside/indicatorconstraints',
    icon: <HiOutlineTruck className="size-5" />
  },
  {
    title: 'Boxes',
    href: '/sampleside/linearranges',
    icon: <FaBoxArchive className="size-5" />
  },
  {
    title: 'Group',
    href: '/sampleside/objectivemembers',
    icon: <GrGroup className="size-5" />
  },
  {
    title: 'Lock',
    href: '/sampleside/suppliers',
    icon: <IoIosLock className="size-5" />
  },
  {
    title: 'DataBase',
    href: '/sampleside/unitconversions',
    icon: <FaDatabase className="size-5" />
  },
  {
    title: 'Network',
    href: '/sampleside/',
    icon: <LuNetwork className="size-5" />
  },
  {
    title: 'WareHouse',
    href: '/sampleside/',
    icon: <PiWarehouseBold className="size-5" />
  }
];

export function Down() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <BsBoxes />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 grid-cols-3 ">
              {components.map((component) => (
                <ListItem key={component.title} href={component.href}>
                  <div className="flex items-center p-3">
                    <div className="text-sky-500 ">{component.icon}</div>
                    <div className="text-stone-950 ml-1.5">{component.title}</div>
                    
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className = 'left-20'>
      <NavigationMenuLink asChild>
        <Link
          href={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
