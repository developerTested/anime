import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div className="bg-midnight text-slate-300 w-full h-screen">
      <Outlet />
    </div>
  )
}
