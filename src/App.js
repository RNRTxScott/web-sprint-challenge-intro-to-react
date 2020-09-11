import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const App = () => {
const [swChar, setSwChar] = useState([])
  useEffect(() => {
    Axios.get('https://swapi.dev/api/people/')
    .then(response =>{
      setSwChar(response.data.results);
      console.log('Char Check', response.results);
    })
    .catch(error => {
      console.log('Broken Data', error);
    })
  },[])



  // return (
  //   <div className="App">
  //     <h1 className="Header">Characters</h1>
  //      <Characters swChar={swChar} />
  //   </div>
    return (
          <div className="App">
       <h1 className="Header">Characters</h1>
      <div>
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
          <Characters swChar={swChar} />

            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
      </div>
    );
  };
  


export default App;








  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.