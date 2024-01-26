'use client';

import { Checkbox } from "@/components/ui/checkbox"
import { BsFillSuitSpadeFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { BsDiamondFill } from "react-icons/bs";
import { BsFillSuitClubFill } from "react-icons/bs";
import card_names from "@/data/card-name";
import { Button } from "@/components/ui/button";


const SelectCard = () => {

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className='bg-zinc-950 h-full text-white'>
      <form onSubmit={handleSubmit} className='grid grid-cols-4 p-7'>
      <div className='flex flex-col mt-3 p-4 col-span-1 items-center gap-6'>
        <BsFillSuitSpadeFill className='text-4xl'/>
        {card_names.map((num)=>(
          <div className='grid grid-cols-2 gap-5' key={num}>
            <div className='col-span-1 items-center justify-center'>
            <Checkbox className='border-white' id={`spade-${num}`}/>
            </div>
            <label htmlFor={`spade-${num}`} className=' col-span-1'>{num}</label>
          </div>
        ))}
      </div>
      <div className='flex flex-col mt-3 p-4 col-span-1 items-center gap-6'>
        <FaHeart className='text-4xl'/>
        {card_names.map((num)=>(
          <div className='grid grid-cols-2 gap-5' key={num}>
            <div className='col-span-1 items-center justify-center'>
            <Checkbox className='border-white' id={`heart-${num}`}/>
            </div>
            <label htmlFor={`heart-${num}`} className=' col-span-1'>{num}</label>
          </div>
        ))}
      </div>
      <div className='flex flex-col mt-3 p-4 col-span-1 items-center gap-6'>
        <BsDiamondFill className='text-4xl'/>
        {card_names.map((num)=>(
          <div className='grid grid-cols-2 gap-5' key={num}>
            <div className='col-span-1 items-center justify-center'>
            <Checkbox className='border-white' id={`diamond-${num}`}/>
            </div>
            <label htmlFor={`diamond-${num}`} className=' col-span-1'>{num}</label>
          </div>
        ))}
      </div>
      <div className='flex flex-col mt-3 p-4 col-span-1 items-center gap-6'>
        <BsFillSuitClubFill className='text-4xl'/>
        {card_names.map((num)=>(
          <div className='grid grid-cols-2 gap-5' key={num}>
            <div className='col-span-1 items-center justify-center'>
            <Checkbox className='border-white' id={`club-${num}`}/>
            </div>
            <label htmlFor={`club-${num}`} className=' col-span-1'>{num}</label>
          </div>
        ))}
      </div>
      <Button type="submit" variant={"destructive"} className='absolute bottom-10 right-12'>Submit</Button>
      </form>
    </div>
  )
}

export default SelectCard