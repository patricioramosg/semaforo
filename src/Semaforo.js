import { useState } from "react";
import img1 from "./imagenes/semaforo.jpg";



const Semaforo = () => {
    
    let [counter, setCounter] = useState(1)

    const [ color, setColor] = useState("green");

    console.log(color)

    return (
        <div className="container">
            <div id="semaforo">
                <div onClick={()=>{
                    setColor( "red")
                }} className="light" id={color=='red' ? color : 'grey'} ></div>


                <div onClick={()=>{
                    setColor( "yellow")
                }} className="light" id={color=='yellow' ? color : 'grey'}></div>

                <div onClick={()=>{
                    setColor( "green")
                }} className="light" id={color=='green' ? color : 'grey'}></div>

                <button onClick={() => {
                    if (counter <3){
                        setCounter(counter +1);
                    } else {
                        setCounter(1);
                    }
                    
                    console.log(counter)

                    switch (counter){
                        case 1 : setColor('red')
                        break;
                        case 2 : setColor('yellow')
                        break;
                        case 3 : setColor('green')
                        break;

                    }

                }}>Cambiar!</button>
            </div>
        </div>
    )
};


export default Semaforo;