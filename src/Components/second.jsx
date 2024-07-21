import  './Styles/second.css'
export const Second1 = ()=>{
    return (
        <>
       <div className="container-fluid">
       <h2>I am the first named Export from Second.jsx file</h2>
       </div>
        </>
    )
}

export const Second2=()=>{
  return (
    <>
    <div className="container">
    <h2>This is Second Export </h2>
    <button class="btn btn-primary btn-outline-secondary text-light">Click me</button>

    <img src="./Images/code.png" alt="" />

    </div>

    </>
  )
}