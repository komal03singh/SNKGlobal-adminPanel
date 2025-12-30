"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"
import React from 'react';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function AdminLogin() {

  const router = useRouter()
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    const res = await fetch("/api/admin/login",{
      method:"POST",
      body: JSON.stringify({
        name,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
    })
    console.log(res)
    console.log(name,password)

    if(res.ok){
      router.push("/AdminDashboard")
    }
    else{
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="flex items-center gap-2 text-5xl font-bold"><span><MdOutlineAdminPanelSettings /></span>Admin Panel</h1>

      <form onSubmit={handleLogin} className="w-1/2 p-6 flex flex-col items-center gap-8 mt-8">
        <div className="flex w-full justify-center">
          <div className="text-lg flex flex-col font-light gap-4 items-center justify-start">
          <label className=" flex items-center gap-2 w-full py-2 my-2" htmlFor="name"><span className="text-2xl"><CiMail /></span>Enter Email</label>
          <label className="flex items-center gap-2 py-2 my-2" htmlFor="Password"><span className="text-2xl"><CiLock /></span>Enter Password</label>  
        </div >
        <div className="px-4 w-2/3 text-lg flex flex-col font-light gap-4 items-center">
          <input
            type="text"
            name="name"
            id="name"
            onChange = {(e)=>setName(e.target.value)}
            placeholder="Enter your email"
            className="border-black/20 border w-full px-4 py-2 my-1 rounded-lg outline-none"
          />
          <input
          type="password"
          name="password"
          id="password"
          onChange = {(e)=>setPassword(e.target.value)}
          placeholder="Enter your password"
          className="border-black/20 border w-full px-4 py-2 my-1 rounded-lg outline-none"/>
        </div>
        </div>

        <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg mt-6">Login</button>
        
      </form> 
      
      
    </div>
  )
}

export default AdminLogin
