import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const People = () =>{
    const [starWars, setStarWars] = useState();
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [])

  async function getData(){
    const response = await fetch('https://swapi.co/api/people/');
    const data = await response.json();
    const people = data.results;
    setStarWars(people);
    setLoading(false);
  }

  console.log(starWars);

  const Characters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;
  const Character = styled.div`
    width: 300px;
    background-color: rgba(200,140,200,1);
    margin: 0 0 20px 0; 
  `;
  const Load = styled.div`
    text-align:center;
    font-size: 4.0rem;
  `;
  const Name = styled.h1`

  `;
  const Gender = styled.h3`

  `;
  const Eyes = styled.h3`

  `;
  const Height = styled.h3`

  `;

  return(
    <Characters>
        {loading ? <Load> ...Loading </Load> : 
            starWars.map(i => (
                <>
                    <Character>
                        <Name> {i.name} </Name>
                        <Gender> Gender : {i.gender} </Gender>
                        <Eyes> Eye Color : {i.eye_color} </Eyes>
                        <Height> Height :  {i.height}cm </Height>             
                    </Character>
                </>
            ))
        }
    </Characters>
  )
}

export default People;