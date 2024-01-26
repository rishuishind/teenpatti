"use client"

import Image from "next/image";
import cardimg from '/home/rishabh/Desktop/Rishu/teenpatti/public/cardsimg.png'
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleRoute=():void=>{
    router.push('/select-card');
  }

  return (
    <Fragment>
      <div className='lg:grid grid-cols-2 h-full flex flex-col bg-[#212529]'>
          <div className='col-span-1  flex justify-center items-center'>
            <Image src={cardimg} alt="card-image" />
          </div>
          <div className='col-span-1'>
            <div>
              <h1 className=' font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-800 mt-16 ml-16'>Unleash Victory!!</h1>
              <p className='ml-36 mt-16 text-slate-50'>Create the best sequence to win the game</p>
            </div>
            <Button variant={"outline"} onClick={handleRoute} className='absolute right-10'>Take Me</Button>
          </div>
      </div>
    </Fragment>
  );
}
