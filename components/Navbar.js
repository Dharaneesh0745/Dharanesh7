import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-black fixed top-0 w-[100%] z-10">

      <div className="container mx-auto flex justify-between items-center py-4">

        <div className="text-[24px] text-white ml-20">
          Webloom
        </div>

        <div className="flex gap-6 text-white mr-20">
          <Link href="/" className="hover:text-[orange]">
            Home
          </Link> 
          <Link href="/courses" className="hover:text-[orange]">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-[orange]">
            Contact Us
          </Link>
        </div>



      </div>
    </div>
  )
}

export default Navbar