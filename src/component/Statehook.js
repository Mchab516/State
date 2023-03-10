import React, {useState} from 'react'

const Statehook = () => {
    const [name , setname]= useState('mohammed');
    const [age , setage]= useState('25');
    const [money , setmoney]= useState();

    const changemyname = () =>{
        setname('Rabie');

    }

    const changemyage = () =>{
        setage('20');

    }

    const changemymoney = () =>{
        setmoney('i will be a bellionair');

    }

  return (
    <div>
        <h1>My name is {name}</h1>
        <button onclick={changemyname}>Change</button>
        <h1>my new name is {name}</h1>

        <h1>My name is {age}</h1>
        <button onclick={changemyage}>Change</button>
        <h1>my new age is {age}</h1>

        <h1>{money}</h1>
        <button onclick={changemymoney}>Change</button>
        <h1>{money}</h1>
    </div>
  )
}
export default Statehook;
