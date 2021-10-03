import data from './colors.json';
import Container from './container';

function Color(){
     return <div>
            { data.map(color => <Container color={color} />       
              )
            }
     </div>
              
}

export default Color;