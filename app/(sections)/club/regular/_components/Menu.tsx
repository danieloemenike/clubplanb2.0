"use client"
import React, { useState } from 'react';
import { regularMenu} from '@/menuData';
import Image from 'next/image';

type DrinkModel = {
  id: number;
  category: string;
  drinks: {
    id: number;
    name: string;
    image: string;
    price: string;
  }[];
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value === '' ? null : event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  
  return (
    <>
      <section className='w-full h-full flex mt-20 '>
        <div className='w-full h-full'>
          <div className='flex justify-center text-[1rem] md:text-[3rem] w-full h-full items-center px-2'>
            <h2 className='font-bold text-[5rem] font-gv bg-clip-text text-transparent bg-gradient-to-r  from-white via-white/80  to-orange-500'>Regular Menu </h2>
          </div>
          <div className='w-full h-full'>
            <div className="flex flex-col md:flex-row justify-center m-4 p-4 gap-2 md:gap-4">
              <select title="categories" onChange={handleCategoryChange} className='mt-4 p-2 border bg-black rounded-md '>
                <option value=''>All Drinks</option>
                {regularMenu.map((drinks: DrinkModel) => (
                  <option key={drinks.id} value={drinks.category}>
                    {drinks.category}
                  </option>
                ))}
              </select>
              <input
                type='text'
                placeholder='Search drinks...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='mt-4 p-2 border border-gray-300 rounded-md bg-black'
              />
            </div>
            {regularMenu.map((drinks: DrinkModel) => {
              const filteredDrinks = drinks.drinks.filter(
                (drink) =>
                  (!searchTerm || drink.name.toLowerCase().includes(searchTerm)) ||
                  (!searchTerm || drink.price.toLowerCase().includes(searchTerm))
              );

              if (!selectedCategory || (selectedCategory && drinks.category === selectedCategory && filteredDrinks.length > 0)) {
                return (
                  <div key={drinks.id}>
                    {filteredDrinks.length > 0 && <div className=' bg-black flex decoration-from-font  underline underline-offset-8  justify-center'> <h3 className='font-bold text-[3rem] text-center mt-32 mb-12 font-gv capitalize tracking-[.20rem] bg-clip-text text-transparent bg-gradient-to-r  to-white  from-orange-400 '>{drinks.category}</h3> </div>}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:mx-3 md:gap-6 mx-2 lg:mx-20 backdrop-filter backdrop-blur-lg'>
                      {filteredDrinks.map((drink) => (
                        <div key={drink.id} id={drink.id.toString()} className='rounded-md h-80 w-50 p-2 shadow   backdrop-filter backdrop-blur-lg bg-zinc-900'>
                          <div className='h-60 w-full bg-white object-contain flex items-center justify-center overflow-hidden rounded-t-lg mb-2'>
                            <Image src={ drink.image } alt="drinks" width={ 290 } height={ 150} className='object-contain rounded-xl' loading='lazy'/>
                          </div>
                          <div className='w-full flex justify-center items-center  h-[17%] mt-3'>
                            <h2 className=' text-base text-white'> <span className='bg-clip-text '>{ drink.name } - </span><span className='rounded-md text-sm bg-white text-black p-1 font-semibold'>{ drink.price}</span></h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
            {regularMenu
              .flatMap((drinks: DrinkModel) => drinks.drinks)
              .filter(
                (drink) =>
                  (!searchTerm || drink.name.toLowerCase().includes(searchTerm)) ||
                  (!searchTerm || drink.price.toLowerCase().includes(searchTerm))
              ).length === 0 && <div className='text-center col-span-5 h-60 w-full flex flex-col justify-center items-center text-2xl font-semibold my-36 gap-4'>
                  <>
                    <Image src="/undraw.svg" alt="missing" width={ 250 } height={ 250 } />
                    <h2> No drinks found </h2>
                  </>
                 </div> }
          </div>
        </div>
      </section>
    </>
  );

}
