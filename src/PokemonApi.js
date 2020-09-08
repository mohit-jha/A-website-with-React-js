import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SelectPokemon from './SelectPokemon'
import Img from '../src/a.jpg'

export default function PokemonApi() {
    const [sel, setsel] = useState();
    const [name, setname] = useState()
    const [moves, setmoves] = useState()
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${sel}/`)

            console.log(res);
            setname(res.data.name)
            setmoves(res.data.moves.length)
        }
        getData()
    })
    const handleChange = (event) => {
        setsel(event.target.value)
    }
    return (
        <div style={{ opacity:"0.9", background:`url(${Img})`,height:'100vh'}}>

            <div style={{  width: '10', display: '', padding: '00px 1px 0 500px' }}>
                <h3 style={{paddingTop:'200px',opacity:'1'}}> You Choose <span style={{ color: 'red' }}>
                    {sel}
                </span>
                </h3>
                <br />
                <h3> My Name Is   <span style={{ color: 'red' }}>
                    {name}
                </span>
                </h3>
                <br />
                <h3> I Have   <span style={{ color: 'red' }}>
                    {moves}
                </span> Moves
            </h3>
                <SelectPokemon change={handleChange} />
            </div>
        </div>
    )
}
