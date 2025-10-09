import React from 'react';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function AdminLogin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="flex items-center gap-2 text-5xl font-bold"><span><MdOutlineAdminPanelSettings /></span>Admin Panel</h1>

      <form action="" className="w-1/2 p-6 flex items-center gap-8 mt-8">
        <div className="text-lg flex flex-col font-light gap-4 items-center justify-start">
          <label className=" flex items-center gap-2 w-full py-2 my-2" htmlFor="email"><span className="text-2xl"><CiMail /></span>Enter Email</label>
          <label className="flex items-center gap-2 py-2 my-2" htmlFor="Password"><span className="text-2xl"><CiLock /></span>Enter Password</label>  
        </div >
        <div className="px-4 w-2/3 text-lg flex flex-col font-light gap-4 items-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border-black/20 border w-full px-4 py-2 my-1 rounded-lg"
          />
          <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="border-black/20 border w-full px-4 py-2 my-1 rounded-lg"/>
        </div>
        
      </form> 
      <button className="bg-black text-white px-6 py-2 rounded-lg mt-6" type="submit">Login</button>
      
    </div>
  )
}

export default AdminLogin
