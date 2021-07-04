import './App.css';
import React,{useState} from 'react';



function App() {
  

  let [inputVal1,inputCh1] =  useState();
  let [inputVal2, inputCh2] = useState();



  return (
    <div className="App">
       <input type='number' onChange={(e)=>inputCh1(e.target.value)} value={inputVal1}/>
       <input type='number' onChange={(e)=>inputCh2(e.target.value)} value={inputVal2} />
       <button onClick={()=>{var sum = parseInt(inputVal1)+parseInt(inputVal2); alert(sum);}}>+</button>
       <button onClick={()=>{var min = parseInt(inputVal1)-parseInt(inputVal2); alert(min);}}>-</button>
    </div> 
  );
}

export default App;
