import React, { useState, useEffect } from "react";
import axios from 'axios'
// import { API_KEY, BASE_URL } from "../NASA"
import "./App.css";
import Asteroids from './Asteroids'
import Photo from './Photo'

function App() {

  const BASE_URL = 'https://api.nasa.gov/planetary/apod'
  const API_KEY = 'qJeZQG46kuNr1O7yjGbbYfwBrk45kfccKGcpnR9R'
  const [apod, setApod] = useState('')

  useEffect(()=> {

    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(value => {
      console.log('happy path start')
      console.log(value)
      console.log(value.data.url)
      setApod(value.data.url)
      console.log('happy path working')
     
    })
    .catch(error => {
      console.log('error')
    })

  }, [])

  console.log(apod)

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    
      <div className="Photo">
        <h2>Here is NASA's Photo of the Day:</h2>
        <Photo img src={apod}/>
        </div>
        <Asteroids />
    </div>

  );
}

export default App;
