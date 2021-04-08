import React, { useState, useReducer } from 'react' 

function reducer(state, action) {
    switch (action.type) {
        case 'increment': 
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1}
        default:
            return state
    }
    
}

function LearnReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0})
    const [count, setCount] = useState(0)

    function oldIncrement() {
        setCount(prevCount => prevCount + 1)
    }

    function oldDecrement() {
        setCount(prevCount => prevCount - 1)
    }

    function increment() {
        dispatch({ type: 'increment' })
    }

    function decrement() {
        dispatch({ type: 'decrement' })
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}

export default LearnReducer