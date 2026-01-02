import React from 'react'
import Image from 'next/image'
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import Link from 'next/link'  

function Header() {
  return (
    <div className='fixed left-0 top-0 h-screen w-3/12 bg-[#F5F7FB] flex flex-col gap-4'>
        <nav className='flex items-center h-30 px-3'>
        <Image height={150} width={200} src="/snkNewLogo.png" alt="logo" />
      </nav>
      <div className='flex '>
        <div className='w-[90%] py-5 px-2'>
          <ul className='flex flex-col gap-4'>
            <Link href="/AdminDashboard">
              <li className='flex gap-2 items-center px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5 hover:cursor-pointer'>
                <span className='text-2xl'><LuLayoutDashboard /></span>Dashboard
              </li>
            </Link>
            <Link href="/ManageProducts">
              <li className='flex gap-2 items-center px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5 hover:cursor-pointer'>
                <span className='text-2xl'><HiOutlineShoppingBag /></span>Product
              </li>
            </Link>
            <Link href="/ManageOrders">
              <li className='flex gap-2 items-center px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5 hover:cursor-pointer'>
                <span className='text-2xl'><BsCart2 /></span>Orders
              </li>
            </Link>
            <Link href="/ManageUsers">
              <li className='flex gap-2 items-center px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5 hover:cursor-pointer'>
                <span className='text-2xl'><IoPeopleOutline /></span>Customers
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header