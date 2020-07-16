import React from 'react'
import styled from 'styled-components'

const HazardStyle = styled.div`

background-color:darkslategrey;
max-width:80%;
width:600px;
padding:2px;

`

const Hazardous = props => {
    return (
        <HazardStyle>>{props.name}</HazardStyle>
    )
}

export default Hazardous;