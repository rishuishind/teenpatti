import Link from "next/link";
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="h-[60px] bg-[#ff0054]">
      <div className="flex justify-between items-center p-4">
        <div>
          <Link className='font-bold text-white text-3xl' href='/'>Card Sequencer</Link>
        </div>
        <div className="">
          <ul className="flex gap-7">
            <Link className='text-white' href='/'>Home</Link>
            <Link className='text-white' href='/about'>About us</Link>
            <Link className='text-white' href='/contact'>Contact us</Link>
            <UserButton afterSignOutUrl='/'/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;