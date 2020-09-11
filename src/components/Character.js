
import React from 'react';



const Character = props => {
const { swChar } = props;
console.log('Pic Container', swChar);


return(
    <div> <img alt='star wars charachter' src={Character.url} /> </div>
)
}
export default Character;

