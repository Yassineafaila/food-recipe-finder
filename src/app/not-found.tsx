import React from 'react'

function NotFound() {
  return (
    <main className='main flex flex-col items-center justify-center p-24 relative'>
        <div className='container mx-auto flex items-center flex-col gap-3'>
            <h1 className='text-orange-400 text-4xl font-bold '>404</h1>
            <p className="text-gray-400">Page Not Found</p>
        </div>
    </main>
  )
}

export default NotFound