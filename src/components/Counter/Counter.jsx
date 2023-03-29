import './Counter.css';
import {useEffect, useState} from "react";


export const Counter = function ({factor})  {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = "Compteur: " + count;
    }, [count]);

    useEffect(()=> {
        console.log("Debug, factor vaut:" + factor);
    }, [factor])

    return(
        <div className="counter">
            <div>
                <button onClick={() => setCount(count + factor)}>Incrémenter de {factor}</button>
                <button onClick={() => setCount(count - factor)}>Décrémenter de {factor}</button>
                <button onClick={() => setCount(count * factor)}>Fois 2 de {factor}</button>
                <button onClick={() => setCount(count / factor)}>Div 2 de {factor}</button>
            </div>
            <p>Compteur: {count}</p>
            <p>Facteur: {factor}</p>
        </div>
    );
}