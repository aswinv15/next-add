import Image from 'next/image';
import Link from 'next/link';

import { Button } from './Button';
import Cards from './Cards';
// eslint-disable-next-line import/order
import { HeroBackground } from './HeroBackground';
import background from '@/public/assets/background.jpg';
// eslint-disable-next-line import/no-unresolved
import blurCyanImage from '../../public/images/blur-cyan.png';
// eslint-disable-next-line import/no-unresolved
import blurIndigoImage from '../../public/images/blur-indigo.png';
import { Cardschdcn } from './Cardschdcn';

export function Hero() {
  return (
    <div className="relative">
      {/* <Image
        className="absolute inset-0 size-full object-cover"
        src={background}
        alt=""
        width={1200}
        height={530}
      /> */}
      <div className="h-screen overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
        <div className="flex mt-10 items-center sm:px-2 lg:relative lg:px-0  my-auto  justify-center ">
          <div className="mx-auto h-screen max-w-2xl items-center gap-x-10 gap-y-16 px-4 ">
            <div className="flex flex-col gap-y-4 justify-center items-center h-screen my-auto ">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent">
                BlueNorth AI
              </p>
              <p className="mt-3 text-3xl  text-white text-center">
                Enterprise AI suite to transform Supply Chain Planning and
                Execution
              </p>
              <div className="mt-8 flex justify-center gap-4 ">
                <Button variant="secondary" className={undefined}>
                  <Link href="">Sales & Operation Planning</Link>
                </Button>
                <Button className={undefined}>
                  <Link href="/risk/analysis">Availability Analytics</Link>
                </Button>
                <Button className={undefined}>
                  <Link href="">e2e Supply Chain</Link>
                </Button>
              </div>
              <div className="flex justify-center items-center mt-8">
                <Cardschdcn />
              </div>
            </div>
          </div>

          {/* <Cards /> */}
        </div>
      </div>
    </div>
  );
}
