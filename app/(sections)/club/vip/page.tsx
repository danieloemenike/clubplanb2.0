import Header from '@/components/Header'
import React from 'react'
import Menu from './_components/Menu'
import Hero from '../_components/Hero'

type Props = {}

function VipPage({}: Props) {
  return (
    <section className='bg-gradient-to-r from-red-800/10 via-black to-black '>
      <Hero path="/caraa3.jpg" title="Your VIP Ticket to Luxury" />
      <Menu/>
    </section>
  )
}

export default VipPage