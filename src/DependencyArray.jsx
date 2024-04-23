import react, { useState, useEffect } from 'react';

function DependencyArray(){
    const [count, setCount] = useState(0);
    const [input, setInput] =useState('');
    const Increase = () =>{
        setCount(count +1)
    }
    const decrease = () =>{
        setCount(count -1)
    }
    const Inputfield = (e) => {
        setInput(e.target.value);
    }

    useEffect(() =>console.log("clicked"), [count])
    return(
        <>
       <div className='container w-50'>
       <div className='card mt-4 d-flex justify-content-center align-items-center'>
        <div className='card-header'>
        <h3>Without input field ( mirror Effect)</h3>
        </div>
       <div className='card-body'>
       <h4>{count}</h4>
       <input type="text" onChange={Inputfield}/>
        <p>{input}</p>
       
        <div className='d-flex justify-content-center mb-3'>
       <button onClick={Increase} className='me-3 btn btn-secondary'>Increase</button>
        <button onClick={decrease} className=' btn btn-secondary'>Decrease</button>
       </div>
       </div>
        
       </div>
       </div>
        </>
    )
}

export default DependencyArray;