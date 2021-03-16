import React, { useState } from 'react';

export const Counter = ({init, stock, onAdd}) => {

    const [counter, setCounter] = useState ( init);

    const handleApp = () => {
        if (counter < stock){
        setCounter( counter + 1);
        }
    }
    const handleSubtract = () => {
        if (counter > 1){
        setCounter( counter - 1);
        }
    }
    return (
        <div className= "Contador">
            <button onClick={ handleApp }>+1</button>
            <button onClick={ handleSubtract }>-1</button>
            <form onSubmit={ e => onAdd(e, counter) }>
                {/* <h2>{couter}</h2> */}
                <input value={ counter}/>
                
                <button type='submit'>Add</button>
            </form>
                
        </div>
    )
}