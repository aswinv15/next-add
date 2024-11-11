import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@/components/ui/context-menu';
import Link from 'next/link';


const actions = [
  {
    id: 1,
    name: 'Generative AI Based Control Tower',
    to: '/ai',
    img: '/assets/generateAi.png',
    description:
      ' Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.'
  },
  {
    id: 2,
    name: 'Diagnostic Engine',
    to: '/snop/truck',
    img: '/assets/salesopplanning.png',
    description:
      'Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.'
  },
  {
    id: 3,
    name: 'Optimization Engine',
    to: '/snop/input',
    img: '/assets/diagnostics.png',
    description:
      'With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production.'
  },

  {
    id: 4,
    name: 'Execution Engine',
    to: '/demo/dashboard/inventory',
    img: '/assets/kpicard.png',
    description:
      'Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.'
  }
];

const listenNow = [
  {
    id: 1,
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover:
      'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80'
  },
  {
    id: 2,
    name: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover:
      'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80'
  },
  {
    id: 3,
    name: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80'
  },
  {
    id: 4,
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80'
  }
];

export function Cardschdcn() {
  return (
    <div className="flex space-x-4 mx-auto pb-4">
      {actions.map((album) => (
        <Link key={album.id} href={album.to}>
          <div
            key={album.id}
            className={cn(
              'group relative h-[500px] w-[300px] overflow-hidden rounded-2xl flex-1 hover:grow-[1.25]'
            )}
          >
            <ContextMenu>
              <ContextMenuTrigger>
                <div className="absolute inset-0">
                  <Image
                    src={album.img}
                    alt={album.name}
                    width={550}
                    height={550}
                    className="absolute inset-0 size-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-4">
                    <div className="w-48">
                      <h2 className="text-2xl font-medium text-white">
                        {album.name}
                      </h2>
                      <div className="grid grid-rows-[0fr] transition-all group-hover:grid-rows-[1fr]">
                        <p className="mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                          {album.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ContextMenuTrigger>
            </ContextMenu>
          </div>
        </Link>
      ))}
    </div>
  );
}