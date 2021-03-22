import React, { useState } from 'react'

function HookConterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++)
            setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1>Count : {count}</h1><br />
            <button onClick={() => setCount(initialCount)}>Reset</button> <br />
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment </button>  <br />
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement </button>  <br />

            {/*
            <button onClick= {()=>setCount(count+1)}>Increment </button>  <br /> 
            <button onClick= {()=>setCount(count-1)}>Decrement </button>  <br /> */}

            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookConterTwo
