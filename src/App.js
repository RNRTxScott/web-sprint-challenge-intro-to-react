import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const App = () => {
const [characterList, setCharacterList] = useState([])
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then((response) =>{
     
      setCharacterList(response.data.results);
      // console.log('Char Check', response.data.results);
    })
    .catch(error => {
      console.log('Broken Data', error);
    })
  },[])
    return (
          <div className="App">
                  <h1 className="Header">Characters</h1>
                  <Card>
                               {characterList.map((item) => {
                              return( 
                              <Characters key={item.name} name={item.name} gender={item.gender} />
                            )})} 
                   </Card>
          </div>
    );
  };


export default App;








  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.