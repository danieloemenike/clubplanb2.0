import React from 'react'
import Menu from './_components/Menu';
import Header from '../../../../components/Header';
import Hero from '../_components/Hero';

type Props = {}

function SkyPage({}: Props) {
    return (
        <section className='bg-gradient-to-r to-black via-black from-sky-900/20 '>
         <Hero path="/carab4.jpeg" title="Where Luxury Feels Like Home" lounge="Sky"/>
            <Menu/>
        </section>
    );
}

export default SkyPage