'use client';
import { useState} from 'react'

function autoComplete({resourc  , className ,placeholder ,setstate}) {

  const [inputValue,setValue] =useState(['' ,true])
  
  function submit(e){
    e.preventDefault()
  }
  const suggestion = resourc.filter(ele=>{
    return inputValue[0]!==''&& ele.toLowerCase().startsWith(inputValue[0].toLowerCase())
  }).map(ele=>{
    return <p key={ele} onClick={()=>{setValue([ele,false]);setstate(ele)}}>{ele}</p>
  })

  

  return (
    <div style={{position:'relative',width:'100%',height:"100%"}}>
      <input type={'text'}  className={className} placeholder={placeholder} onChange={e=>{setValue([e.target.value,true]);setstate(e.target.value);}} value={inputValue[0]} />
    <div className='ManufectureSuggest'>
      {inputValue[1]&&suggestion}
    </div>
    </div>
  )
}

export default autoComplete