import Link from 'next/link'
import { SignOutButton } from '@clerk/nextjs'
import {FiLogOut,FiHome} from 'react-icons/fi';
import {IoReaderOutline} from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className="group top-0 sticky flex items-center  justify-between bg-green-700 p-2 text-green-100 shadow-md z-2 ">
      <a className="p-4 text-xl font-bold" href="#">
        Earth Blog
      </a>
      <div
        className=" md:flex items-center space-x-1 md:mr-8 lg:space-x-8 hidden"
        id="navbarNav"
      >
        <Link href="/">
          <a className="rounded-md flex items-center space-x-2 px-4 py-3 hover:bg-slate-100 hover:text-green-700">
            <FiHome/>
            <span>
            Home
            </span>
          </a>
        </Link>
        <Link href="/blog">
          <a
            className="rounded-md  flex items-center space-x-2 p-4 py-3 hover:bg-slate-100 hover:text-green-700"
            href="#"
          >
            <IoReaderOutline/>
            <span>
            Blog
            </span>
          </a>
        </Link>
        <Link href="/gallery">
          <a
            className="rounded-md  flex items-center space-x-2 p-4 py-3 hover:bg-slate-100 hover:text-green-700"
            href="#"
          >
            <IoReaderOutline/>
            <span>
            Galerry
            </span>
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
