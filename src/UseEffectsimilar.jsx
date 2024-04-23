import React, { useState } from 'react';

function UseEffectSimilar() {
    const [count, setCount] = useState(0); // State to keep track of count
    const [input, setInput] = useState(''); // State to keep track of text input

    // Function to increase count
    const increase = () => {
        setCount(count + 1);
    };

    // Function to decrease count
    const decrease = () => {
        setCount(count - 1);
    };

    // Function to update input state based on input field changes
    const handleInput = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
        <div className='container mt-4 w-50'>
        <div className='card mt-4 d-flex justify-content-center align-items-center'>
        <h3>With input field ( mirror Effect)</h3>
            <h4>{count}</h4>
            {/* Input field for entering text */}
            <input type="text" className='w-50 d-flex justify-content-center' value={input} onChange={handleInput} /><br />
            {/* Display the entered text */}
            {/* <p>{input}</p> */}
            {/* Second input that mirrors the text entered in the first input */}
            <input type="text" className='w-50 d-flex justify-content-center' value={input} onChange={handleInput} /><br />
          <div className='d-flex justify-content-center mb-3'>
          <button onClick={increase} className='mt-3 me-3 btn btn-primary'>Increase</button>
            <button onClick={decrease} className='mt-3 btn btn-primary'>Decrease</button>
          </div>
        </div>
        </div>
        </>
    );
}

export default UseEffectSimilar;
