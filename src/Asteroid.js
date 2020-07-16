import React from 'react'
import styled from 'styled-components'

const AsteroidStyled = styled.div`

background-color:darkslategrey;
max-width:80%;
width:600px;
padding:2px;

`

const Asteroid = props => {
    return (
    <AsteroidStyled>{props.name}</AsteroidStyled>
    )}

export default Asteroid