import axios from 'axios'
import React, { useState, useEffect} from 'react'
import Asteroid from './Asteroid'
import Hazardous from './Hazardous'
import styled from 'styled-components'


const AsteroidsStyle = styled.div`

background-color: teal;
color:gold;
max-width:80%;
width:800px;
padding:10px;
border-radius:5px;
box-shadow:0 0 10px 2px;
margin:5% auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h2 {
    color:goldenrod;
}

.asteroidText {


    font-family:'Bangers', cursive;
    font-size: 2.5rem;
    color:rebeccapurple;
    text-shadow:
		-1px -1px 0 yellow,
		1px -1px 0 yellow,
		-1px 1px 0 yellow,
		1px 1px 0 yellow;
}

.hazardText {

    color:chartreuse;
    font-size: 2.5rem;
    font-family: 'Eater', cursive;
    transition: all 0.5s ease-in-out;
    text-shadow:
		-1px -1px 0 black,
		1px -1px 0 black,
		-1px 1px 0 black,
		1px 1px 0 black;
    &:hover{
        color:red;
        transition: all 0.5s ease-in-out;
    }
}
`

function Asteroids() {

    const URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse/'
    const KEY = 'qJeZQG46kuNr1O7yjGbbYfwBrk45kfccKGcpnR9R'
    const [ asteroids, setAsteroids] = useState([])
    const [ hazards, setHazards] = useState([])

    useEffect(() => {

        axios.get(`${URL}?api_key=${KEY}`)
        .then( arr => {
            console.log('happy asteroid start')
            const newAsteroids = arr.data.near_earth_objects
            setAsteroids(newAsteroids)

            setHazards(newAsteroids.filter(asteroid => asteroid.is_potentially_hazardous_asteroid === true && asteroid.name))
            
            // console.log(hazards, 'hazards')

            })
        .catch( error => {
            console.log('error')
        }) 
        },[])
   

       
        

    return (
        <AsteroidsStyle>
            
                <h2>This is a list of <span className='asteroidText'>Asteroids</span> that are Near Earth:</h2>
            {asteroids.map(data =>
               <Asteroid name={data.name} key={data.id} />
                )}

                <h2>These <span className='asteroidText'>Asteroids</span> are considered potentially <span className='hazardText'>hazardous</span>:</h2>
                
               {hazards.map(data => 
             
                <Hazardous name={data.name} key={data.id} />
                )}
                
        </AsteroidsStyle>
    )

}

export default Asteroids;