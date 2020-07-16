import React, { useState, useEffect } from "react";
import axios from 'axios'
// import { API_KEY, BASE_URL } from "../NASA"
import "./App.css";
import Asteroids from './Asteroids'
import Photo from './Photo'
import styled from 'styled-components'

const StyledMain = styled.div`

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
`

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
    <StyledMain>
      <div className="Photo">
        <h2>Here is NASA's Photo of the Day:</h2>
        <Photo img src={apod}/>
        </div>
        <Asteroids />
        </StyledMain>
    </div>

  );
}

export default App;
