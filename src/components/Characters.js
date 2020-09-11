import React from 'react';
// import Character from './Character';

const Characters = props => {
    const { swChar } = props;
    console.log('Pic Container', swChar);
    const Characters=[];
    
    return(
        <div> {Characters.map((Character, index)=>(
            <Character key={index} Character={Character}  />
            
        ))} </div>
    )
    }
    export default Characters;