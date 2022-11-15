import React from 'react'
import Products from './Products'
import Slider from './Slider'

export default function Home() {
  return (
    <div className='hero'>
        <Slider/>
        <Products />
    </div>
  )
}
