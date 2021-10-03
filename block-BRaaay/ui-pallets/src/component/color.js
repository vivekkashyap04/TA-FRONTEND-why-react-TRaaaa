import data from './colors.json';
import Container from './container';

function Color(){
     return Object.keys(data).map((color) => <Container name={color} allColors={data[color]}/>)            
}

export default Color;