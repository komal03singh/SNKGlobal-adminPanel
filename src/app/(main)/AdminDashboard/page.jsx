import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AdminDashboard() {
  return (
    <div className='flex flex-col gap-10 w-full '>
      <div className='flex justify-center gap-10 mt-10'>
        <Link href="/ManageProducts" className='h-20 w-50 flex justify-center items-center rounded-2xl bg-[#ffafcc]/30 text-black'>
          <h1 className='text-base text-center m-w-1/2'>Manage Products</h1>
        </Link>
        <div className='h-20 w-50 flex justify-center items-center rounded-2xl bg-[#8da9c4]/30 text-black'>
          <h1 className='text-base text-center max-w-1/2'>Manage Users</h1>
        </div>
        <div className='h-20 w-50 flex justify-center items-center rounded-2xl bg-[#a3b18a]/30 text-black'>
          <h1 className='text-base text-center max-w-1/2'>Manage  Orders</h1>
        </div>
      </div>
      <div className='flex justify-center gap-10'>
        <div className='h-20 w-50 flex justify-center items-center rounded-2xl bg-[#ffafcc]/30 text-black'>
          <h1 className='text-base text-center max-w-1/2'>View Users</h1>
        </div>
        <div className='h-20 w-50 flex justify-center items-center rounded-2xl bg-[#8da9c4]/30 text-black'>
          <h1 className='text-base text-center max-w-1/2'>View Orders</h1>
        </div>
        <div className='h-20 w-50 flex justify-center items-center rounded-2xl bg-[#a3b18a]/30 text-black'>
          <h1 className='text-base text-center max-w-1/2'>Manage Admin</h1>
        </div>
      </div>
      
    </div>
  )
}

export default AdminDashboard
