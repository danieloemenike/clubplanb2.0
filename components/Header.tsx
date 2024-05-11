"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const menus = [
  {
      id: "1",
      title: 'Regular',
      path: 'regular',
      color: "#292929"
  },

  {
      id: "2",
      title: 'VIP',
      path: 'vip',
      color: "#31D3C6"
  },
]
function Header({ }: Props) {
  const activeRoute = usePathname();
	const params = useParams();
  return (
      <main className='  flex w-full shadow-md dark:shadow-2xl mb-2 sticky top-0 z-50 bg-black py-2  px-4'>
          <div className='h-[100%] w-full flex items-center justify-between '>
              <Link href="/" className='flex items-center gap-4'>
          <Image src="/clublogo.jpeg" alt="club logo" width={ 50 } height={ 40 } className='rounded-full object-fill' />
          <h2 className='font-bold tracking-tight text-sm md:text-lg  '> CLUB PLAN B</h2>
              </Link>
        <div className="flex gap-4"> 
            { menus.map((menu) => (
              <>
              <Link
							href={`/club/${menu.path}`}
							className={`flex group items-center cursor-pointer px-6 py-2  transition-colors duration-100 transform rounded-lg  hover:shadow-md ${
								activeRoute === `/club/${menu.path}`
									? "bg-gradient-to-r from-orange-600 via-orange-800 to-rose-600 dark:text-white"
									: "  hover:text-black grayscale dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-200 dark:hover:text-black "
							}    `}
                  key={ menu.id }>
                
                  <h2> {menu.title }</h2>
              </Link>
              </>
          ))}
         
             </div>
          </div>
        
    </main>
  )
}

export default Header