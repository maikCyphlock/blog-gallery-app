import Link from 'next/link'
import { SignOutButton } from '@clerk/nextjs'
import {FiLogOut,FiHome} from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="group flex items-center  justify-between bg-teal-600 p-2 text-green-100 shadow-md  ">
      <a className="p-4 text-xl font-bold" href="#">
        Navbar
      </a>
      <div
        className=" flex items-center space-x-1 md:mr-8 lg:space-x-8"
        id="navbarNav"
      >
        <Link href="#">
          <a className="rounded-md flex items-center space-x-2 px-4 py-3 hover:bg-slate-100 hover:text-green-700">
            <FiHome/>
            <span>
            HOME
            </span>
          </a>
        </Link>
        <Link href="#">
          <a
            className="rounded-md  flex items-center space-x-2 p-4 py-3 hover:bg-slate-100 hover:text-green-700"
            href="#"
          >
            HOME
          </a>
        </Link>
    
          <a
            className="rounded-md flex items-center  space-x-2 p-4 py-3 hover:bg-slate-100 hover:text-green-700"
            href="#"
          >
            <FiLogOut/>
            <SignOutButton/>
          </a>
      
      </div>
    </nav>
  )
}

export default Navbar
