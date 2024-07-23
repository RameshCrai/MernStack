import { useState } from "react";

const StateCounter = () => {
    // Stateless
    // let count = 1;
    // const increment = () => {
    //     count += 1;
    //     console.log("count ==>",count)
    // }
    // return (
    //     <>
    //         <button className="btn btn-primary">Click</button>
    //         <h1>{count}</h1>
    //         <button className="btn btn-success" onClick={increment}>+</button>
    //     </>
    // )




    //1) Stateful(hook) (useState)
    /*
    syntax:
    const [value,setValue] =useState(initialValue) 

    */
    const [count,setCount] =useState(1)
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    return (
        <>
            <button className="btn btn-primary">Click</button>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={increment}>+</button>&nbsp;
           {
            count>0 &&
            <button className="btn btn-success" onClick={decrement} >-</button>
            }
        </>
    )
}

export default StateCounter;