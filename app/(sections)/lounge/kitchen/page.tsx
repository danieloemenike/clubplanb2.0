import React from 'react'
import Menu from './_components/Menu';
import Header from '../../../../components/Header';
import Hero from '../_components/Hero';

type Props = {}

function KitchenPage({}: Props) {
    return (
        <section className='bg-gradient-to-r from-red-800/10 via-black to-neutral-800 '>
          <Hero   path="/carab5.jpeg" title="Savor Elegance, Bite by Bite." lounge="Kitchen"/>
            <Menu/>
        </section>
    );
}

export default KitchenPage