import React, { useState } from 'react'

const BasicForm = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [allEntry, setAllEntry] = useState([]);
const submitform = (e) => {
    e.preventDefault();
    if(email && password){
        const newEntry = {id: new Date().getTime().toString(), email, password};
        setAllEntry([...allEntry, newEntry]);
        console.log(newEntry);
        setEmail("");
        setPassword("");
    }else{
        alert("please enter email and password")
    }
    
}
    return (
        <div>
            <form onSubmit={submitform}>
                <div className="d_flex">
                    <label htmlFor="email">Email </label>
                    <input type="text" name="email" id="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                </div>
                <div className="d_flex">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /> 
                </div>
                <button type="submit"> Login</button>
            </form>
            <div>
                {
                    allEntry.map((currEl) => {
                        const {id, email, password} = currEl;
                        return(
                        <div key={id}>
                            <p>{id}</p>
                            <h6>{email}</h6>
                            <h6>{password}</h6>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BasicForm
