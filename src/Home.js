import React from 'react'
import Common from './Common'
import imgHome from "./images/home.png";

export default function Home() {
  return (
    <div className='homePage'>
      <Common  heading='Grow your bussiness with' strong='Team_012 ☘️' para='we are the team of telanted devlopers making webistes' btn='Get Started' img={imgHome} link='/about' />
    </div>
  )
}
