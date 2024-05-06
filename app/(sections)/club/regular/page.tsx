import React from 'react'
import Menu from './_components/Menu';
import Header from '../../../../components/Header';

type Props = {}

function RegularPage({}: Props) {
    return (
        <section>
            <Header/>
            <Menu/>
        </section>
    );
}

export default RegularPage