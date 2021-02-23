import React,{useState} from 'react'

const ShortCirEval = () => {
    const [demo, setDemo] = useState("1")
    return (
        <div>
            <h1>{ "abhash" || demo }</h1>
            <h1>{ demo && "neha"}</h1>
        </div>
    )
}

export default ShortCirEval
