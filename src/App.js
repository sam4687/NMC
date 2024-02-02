import {useState} from "react"
import Child from ".Child"
function App (){
    function clickHandler(){
        console.log("hello")
    setState((prev)=>prev+1)
    }

const [state ,setState]=useState(0)

    return (
        <>
        {state}
        <Child></Child>
        <button  onClick={()=>clickHandler()}> click </button>
        </>
    )
}

export default App;