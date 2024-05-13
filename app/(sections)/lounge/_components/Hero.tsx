import Image from 'next/image'

type Props = {
    path: string
    title: string
    lounge:string
}

function Hero({path, title, lounge}: Props) {
  return (
      <>
       <section className='h-[50vh] lg:h-[75vh] w-full flex flex-col pt-10 lg:flex-row mb-20 lg:pb-10'>
              <div className='h-full  w-full flex flex-col pb:20 md:mb-1 md:justify-center justify-end items-center  lg:ml-28 lg:mr-4 mx-auto '>
                 
                  <div>
                      <h2 className='text-[2rem] md:text-[4rem] items-center justify-center flex lg:tracking-[-0.1rem] w-full lg:leading-[6rem] font-medium gap-4 font-gv tracking-tighter'>
                         Carabana Lounge: {lounge}
                      </h2>
                  </div>
                  <div className='flex items-start text-[0.8rem] md:text-[1.2rem]'>
                      <h2 className="text-white/50" >{ title}</h2>
                  </div>
              </div>
              <div className='h-[40vh] lg:h-[70vh] w-[85%]  items-center justify-center drop-shadow-xl '>
              <Image src={path} alt="model" height={550} width={550} className='rounded-3xl border-white border-2 object-cover mx-4 hover:grayscale drop-shadow-xl  ' priority />
              </div>
      </section>
      </>
  )
}

export default Hero