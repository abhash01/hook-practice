import React, { useState} from 'react';
import './App.css';
//import BasicForm from './components/forms/BasicForm';
//import UseEffect1 from './components/useEffect/UseEffect1';
import UseEffect2 from './components/useEffect/UseEffect2';
//import ShortCirEval from './components/ShortCirEval';
//import UseObject from './components/UseObject';
//import RulesHook from './components/RulesHook';
//import UsestateArray from './components/UsestateArray';
//import UseObject from './components/UseObject';
const App = () => {
  // const [ myName, setMyName] = useState("abhash")
  // const subscribe = () => {
  //   //console.log(myName)
  //   setMyName("Neha");
  //   let val = myName;
  //   (val === 'abhash') ? setMyName("Neha") : setMyName("abhash");
  // }
  return (
    <div className="App">
      {/* <h1>{myName}</h1>
      <button className="btn" onClick={subscribe}>subsribe me</button> */}
      {/* <RulesHook /> */}
      {/* <UsestateArray /> */}
      {/* <UseObject /> */}
      {/* <UsestateArray /> */}
      {/* <ShortCirEval/> */}
      {/* <BasicForm/> */}
      {/* <UseEffect1/> */}
      <UseEffect2 />
    </div>
  )
}

export default App
