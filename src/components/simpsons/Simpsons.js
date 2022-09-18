import {simpsons} from "./data";
import Simpson from "./Simpson";


function Simpsons(props) {
    return (
        <div>
            {
                simpsons.map((simpson,index) => <Simpson kay={index} simpson={simpson}/> )
            }
        </div>
    );
}

export default Simpsons;