import React,{useEffect, useState} from 'react'

const UseEffect1 = () => {
const [count, setCount] = useState(0)
useEffect(() => {
    if(count>=1){
        document.title = `Chat (${count})`;
    }else{
        document.title = `Chat`;
    }
},[count]);
useEffect(() => {
    console.log("abhash hook")
})
//console.log("useeffect-outside");
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={() => {
                setCount(count + 1);
            }}>click me</button>
        </div>
    )
}

export default UseEffect1
