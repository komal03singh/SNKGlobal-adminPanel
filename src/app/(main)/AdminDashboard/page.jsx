import React from 'react'
import Image from 'next/image'

function AdminDashboard() {
  return (
    <div className='h-[590px] w-full'>
      <div className='h-1/2 flex justify-center items-center gap-10'>
        <div className='h-50 w-50 flex justify-center items-center rounded-2xl bg-[#0077b6] text-white'>
          <h1 className='text-2xl text-center'>Manage Products</h1>
        </div>
        <div className='h-50 w-50 flex justify-center items-center rounded-2xl bg-[#0077b6] text-white'>
          <h1 className='text-2xl text-center max-w-1/2'>Manage Users</h1>
        </div>
        <div className='h-50 w-50 flex justify-center items-center rounded-2xl bg-[#0077b6] text-white'>
          <h1 className='text-2xl text-center max-w-1/2'>Manage  Orders</h1>
        </div>
      </div>
      <div className='h-1/2 flex justify-center items-center gap-10'>
        <div className='h-50 w-50 flex justify-center items-center rounded-2xl bg-[#0077b6] text-white'>
          <h1 className='text-2xl text-center max-w-1/2'>View Users</h1>
        </div>
        <div className='h-50 w-50 flex justify-center items-center rounded-2xl bg-[#0077b6] text-white'>
          <h1 className='text-2xl text-center max-w-1/2'>View Orders</h1>
        </div>
        <div className='h-50 w-50 flex justify-center items-center rounded-2xl bg-[#0077b6] text-white'>
          <h1 className='text-2xl text-center max-w-1/2'>Manage Admin</h1>
        </div>
      </div>
      
    </div>
  )
}

export default AdminDashboard
