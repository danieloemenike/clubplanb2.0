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
  },

  {
      id: "2",
      title: 'Madiba',
      path: 'madiba',
    },
    {
        id: "3",
        title: 'Sky',
        path: 'sky',
    },
    {
        id: "4",
        title: 'Kitchen',
        path: 'kitchen',
      },
  
]
function Header({ }: Props) {
  const activeRoute = usePathname();
	const params = useParams();
  return (
      <main className=' h-[5rem] flex w-full shadow-md dark:shadow-2xl  sticky top-0 z-50 mb-15 py-2  px-4 bg-black'>
          <div className=' flex items-center justify-between '>
              <Link href="/" className='flex items-center gap-4 '>
          <Image src="/lounglogo.jpeg" alt="club logo" width={ 100 } height={ 100 } className='rounded-full object-fill' />
          <h2 className='font-bold tracking-tight md:text-lg hidden '> | Regular</h2>
              </Link>
        {/* <div className="flex gap-4"> 
            { menus.map((menu) => (
              <>
              <Link
							href={`/lounge/${menu.path}`}
							className={`flex group items-center cursor-pointer px-6 py-2  transition-colors duration-100 transform rounded-lg  hover:shadow-md ${
								activeRoute === `/lounge/${menu.path}`
									? "bg-gradient-to-r from-orange-600 via-orange-800 to-rose-600 dark:text-white"
									: "  hover:text-black grayscale dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-200 dark:hover:text-black "
							}    `}
                  key={ menu.id }>
                
                  <h2> {menu.title }</h2>
              </Link>
              </>
          ))}
         
             </div> */}
          </div>
        
    </main>
  )
}

export default Header