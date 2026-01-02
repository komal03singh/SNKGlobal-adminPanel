import React from 'react'
import Link from 'next/link'
import { GoPlus } from "react-icons/go";


function ManageProducts() {
  return (
    <div className='flex justify-between'>
      <h1 className='text-2xl font-bold'>All Products</h1>
      <Link className='flex gap-1 items-center bg-black/80 text-white px-4 py-2 rounded-3xl hover:bg-[#0077b6] hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:cursor-pointer' href="/AddProduct"><span className='text-2xl'><GoPlus /></span>
        Add Product
      </Link>
      
    </div>
  )
}

export default ManageProducts
