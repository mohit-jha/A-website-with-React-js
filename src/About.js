import React from 'react'
import Common from './Common'
import about from './images/about.png'
export default function About() {
    return (
        <div className='aboutPage'>
            <Common heading='Welcome To 
            About Page' strong='Team_012 ☘️' para='we are the team of telanted devlopers making webistes' btn='Contact Now ' link='/contact' img={about} />
        </div>
    )
}
