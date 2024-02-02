import {useState} from "react"
function App (){
    function clickHandler(){
        console.log("hello")
    setState((prev)=>prev+1)
    }

const [state ,setState]=useState(0)

    return (
        <>
        {state}
        <button  onClick={()=>clickHandler()}> click </button>
        </>
    )
}

export default App;