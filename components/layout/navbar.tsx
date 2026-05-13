import React from 'react'
import { Bell, Layers, MessageCircle, Search } from "lucide-react"

const Navbar = () => {
  return (
    <header className='py-3'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Layers size={42} />

                <div>
                    <h1 className='text-2xl font-bold'>Hello, MAXO!</h1> {/*in future shoould be dynamic based on user data */}
                    <p className='text-sm text-muted-foreground '>Explore information and activity about your property</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <div className='relative'>
                    <input type="text" placeholder='Search...' className='bg-white shadow-md rounded-2xl pl-4 pr-16 py-3 text-left'/>
                    <div className='absolute right-2 top-1/2 -translate-y-1/2 bg-foreground rounded-2xl p-2'>
                        <Search className='text-white cursor-pointer'/>
                    </div>
                </div>
                <button className='bg-white p-3 rounded-2xl cursor-pointer shadow-sm'>
                    <MessageCircle/>
                </button>
                <button className='bg-white p-3 rounded-2xl cursor-pointer shadow-sm'>
                    <Bell />
                </button>
            </div>
        </div>
    </header>
  )
}

export default Navbar