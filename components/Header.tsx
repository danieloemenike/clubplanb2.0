import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
      <main className='  flex w-full shadow-md dark:shadow-2xl mb-6 sticky top-0 z-50 backdrop-filter backdrop-blur-lg py-2  px-4'>
          <div className='h-[100%] w-full flex items-center '>
              <Link href="/" className='flex items-center gap-4'>
          <Image src="/club.jpeg" alt="club logo" width={ 50 } height={ 40 } className='rounded-full object-fill' />
          <h2 className='font-bold '> Club Plan B</h2>
              </Link>
              <div>
                  
            </div>
          </div>
        
    </main>
  )
}

export default Header