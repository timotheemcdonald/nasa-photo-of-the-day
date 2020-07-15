import axios from 'axios'
import React, { useState, useEffect} from 'react'
import Asteroid from './Asteroid'
import Hazardous from './Hazardous'


function Asteroids() {

    const URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse/'
    const KEY = 'qJeZQG46kuNr1O7yjGbbYfwBrk45kfccKGcpnR9R'
    const [ asteroids, setAsteroids] = useState([])

    useEffect(() => {

        axios.get(`${URL}?api_key=${KEY}`)
        .then( arr => {
            console.log('happy asteroid start')
            setAsteroids(arr.data.near_earth_objects)
            })
        .catch( error => {
            console.log('error')
        }) 
        },[])
   

    return (
        <div>
            
                <h2>This is a list of Asteroids that are Near Earth:</h2>
            {asteroids.map(data =>
               <Asteroid name={data.name} key={data.id} />
                )}

                {/* <h2>These Asteroids are considered potentially hazardous:</h2>
                {asteroids.map(data =>
                <Hazardous name={data.name} is_potentially_hazardous_asteroid={true} key={data.id} />)} */}

                {/* {asteroids.filter(data =>
                <Hazardous hazard={data.is_potentially_hazardous_asteroid === true}/>
                    )} */}
                
        </div>
    )

}

export default Asteroids;