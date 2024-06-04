import React, { useState } from 'react';

const Counter = () => {
  const[count , setCount]=useState(0)

  function add(){
   setCount(count +1 )
  }

  function subtract(){
    setCount(count -1)

    if(count <= 0){
      return setCount(0)
    }
  }

  return (
  <>
  <h1>Counter Project</h1>
<h2>{count}</h2>
<button
onClick={()=>{
  add()
}}
>+</button>

<button
onClick={()=>{
  subtract()
}}
>-</button>
  </>
  );
}

export default Counter;
