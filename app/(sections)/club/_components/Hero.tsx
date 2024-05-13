import Image from 'next/image'

type Props = {
    path: string
    title: string
    
}

function Hero({path, title, }: Props) {
  return (
      <>
     <section className='h-[75vh] w-full flex flex-col pt-10 lg:flex-row mb-20 lg:mb-4 lg:pb-10'>
              <div className='lg:h-full  w-full flex flex-col pb:20 md:mb-1 lg:justify-center justify-end items-center  lg:ml-28 lg:mr-4 mx-auto  h-[60vh]'>
                 
                  <div>
                      <h2 className='text-[2rem] md:text-[4rem] items-center justify-center flex lg:tracking-[-0.1rem] w-full lg:leading-[6rem] font-medium gap-4 font-gv tracking-tighter'>
                         Club Plan B  2.0
                      </h2>
                  </div>
                  <div className='flex items-start text-[1.2rem]'>
                      <h2 className="text-white/50" >{ title}</h2>
                  </div>
              </div>
              <div className='h-[70vh] w-full  items-center justify-center drop-shadow-xl '>
                  <Image src={path} alt="model" height={550} width={550} className='rounded-md border-white border-4 object-cover mx-4 hover:grayscale drop-shadow-xl  ' priority />
              </div>
      </section>
      </>
  )
}

export default Hero