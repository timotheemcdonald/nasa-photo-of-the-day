import React from 'react'
import styled from 'styled-components'

const StyledPhoto = styled.div`

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

img {
    max-width:80%;
}

`

const Photo = props => {
    return (
        <StyledPhoto>
           <img src={props.src} alt='Nasa'></img>
        </StyledPhoto>
    )
}

export default Photo