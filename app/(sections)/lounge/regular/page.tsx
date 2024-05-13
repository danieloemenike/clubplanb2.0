import React from 'react'
import Menu from './_components/Menu';
import Hero from '../_components/Hero';

type Props = {}

function RegularPage({}: Props) {
    return (
        <section className='bg-gradient-to-r from-blue-900/15 via-black to-black '>
            <Hero path= "/carab.jpg" title="Where Class Meets Comfort" lounge="Regular"/>
            <Menu/>
        </section>
    );
}

export default RegularPage