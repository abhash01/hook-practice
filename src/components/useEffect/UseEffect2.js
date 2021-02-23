import React,{useState, useEffect} from 'react'

const UseEffect2 = () => {
const [widthwindow, setWindowWidth] = useState(window.screen.width)
const actualwidth = () =>{
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
}
useEffect(() => {
    console.log("add event");
    window.addEventListener("resize",actualwidth);
    return () => {
        console.log("remove event");
        window.removeEventListener("resize",actualwidth);
    }
})
    return (
        <div>
            <h1>window width</h1>
            <h1>{widthwindow}</h1>
        </div>
    )
}

export default UseEffect2