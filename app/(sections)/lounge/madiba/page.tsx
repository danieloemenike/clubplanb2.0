import React from 'react'
import Menu from './_components/Menu';
import Header from '../../../../components/Header';
import Hero from '../_components/Hero';

type Props = {}

function MadibaPage({}: Props) {
    return (
        <section className='bg-gradient-to-r from-neutral-900 via-black to-zinc-800 '>
        <Hero path="/carab2.webp" title="Elegant Nights, Endless Memories." lounge="Madiba"/>
            <Menu/>
        </section>
    );
}

export default MadibaPage