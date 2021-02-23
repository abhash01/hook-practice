import React, { useState } from 'react'


const UsestateArray = () => {
    const biodata = [
        {
            id:0, name:"abhash", age: 27
        },
        {
            id:1, name:"amam", age: 26
        },
        {
            id:2, name:"pagati", age: 28
        }
    ]
    
    const [ arr1, setClaerarr] = useState(biodata);
    const clearData = () => {
        setClaerarr([]);
    }
    const removeitem = (id) => {
        //alert("al")
        const newArr = arr1.filter((currentEle) => {
            return currentEle.id !== id;
        })
        setClaerarr(newArr);
    }
    
    return (
        <div>
            {/* <h1>my name is abhash age is 27</h1> */}
            {
                arr1.map( (curr) => {
                return (
                    <h1 key={curr.id}>my name is {curr.name} age is {curr.age}
                    <button className="btn-danger" onClick={() => {removeitem(curr.id)}}> remove</button>
                    </h1>
                )
                })
            }
            <button className="btn" onClick={clearData}>clear</button>
        </div>
    )
}

export default UsestateArray
