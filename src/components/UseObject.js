import React, { useState } from 'react'

const UseObject = () => {
    const [objdate, setObjdata] = useState({
        name:"abhash",age:23, rollno:45
    });
    const updatedate = () => {
        setObjdata({...objdate,name:'neha'})
    }
    return (
        <div>
            <h1> my name {objdate.name} age {objdate.age} rollno {objdate.rollno}</h1>
            <button className="btn" onClick={updatedate}>update</button>
        </div>
    )
}

export default UseObject
