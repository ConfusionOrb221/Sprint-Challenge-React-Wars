import React from 'react';
import styled from 'styled-components';

const Character = props => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    const data = props.props;
    const input_lower = props.input.toLowerCase();
    const name_lower = data.name.toLowerCase();
    const Container = styled.div`
    width: 300px;
    background-color: rgba(200,140,200,1);
    margin: 0 0 20px 0; 
    `;
    const Name = styled.h1`

    `;
    const Gender = styled.h3`

    `;
    const Eyes = styled.h3`

    `;
    const Height = styled.h3`

    `;

    return (
        <>
            { input_lower === "" ? 
                <Container>
                    <Name> {data.name} </Name>
                    <Gender> Gender : {data.gender} </Gender>
                    <Eyes> Eye Color : {data.eye_color} </Eyes>
                    <Height> Height :  {data.height}cm </Height>      
                </Container> 
                : input_lower === name_lower ?
                <Container>
                    <Name> {data.name} </Name>
                    <Gender> Gender : {data.gender} </Gender>
                    <Eyes> Eye Color : {data.eye_color} </Eyes>
                    <Height> Height :  {data.height}cm </Height>      
                </Container> 
                : <></>
            }
        </>
    )
}

export default Character;
