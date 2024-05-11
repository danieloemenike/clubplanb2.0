import React from 'react'
import Menu from './_components/Menu';
import Header from '../../../../components/Header';

type Props = {}

function RegularPage({}: Props) {
    return (
        <section className='bg-gradient-to-tr from-gray-800 via-black to-zinc-800 '>
        
            <Menu/>
        </section>
    );
}

export default RegularPage