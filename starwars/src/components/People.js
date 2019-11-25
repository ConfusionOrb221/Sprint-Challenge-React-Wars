import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Character from './Character';


const People = () =>{
    const [starWars, setStarWars] = useState();
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    

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
  const Load = styled.div`
    text-align:center;
    font-size: 4.0rem;
  `;
  const FormArea = styled.div`

  `;

  function updateInput(e){
      e.preventDefault();
      setInput(e.target.value);
  }

  return(
    <>
        <FormArea>
            <form onSubmit= {e=> {e.preventDefault()}}>
                <input
                type="text"
                key="search"
                className="input"
                id="addInput"
                value = {input}
                onChange = {e=> {updateInput(e)}}
                autoFocus
                />
            </form>
        </FormArea>
        <Characters>
            {loading ? <Load> ...Loading </Load> : 
                starWars.map(i => (
                    <Character props={i} input={input} />
                ))
            }
        </Characters>
    </>
  )
}

export default People;