import React, { useState } from 'react'

const RulesHook = () => {
    const [myName, setMyname] = useState("abhash hook concept")
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
}

export default RulesHook
