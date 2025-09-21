import axios from 'axios';
import React, { useState } from 'react'

const TaskB = () => {
    const [prompt,setPrompt]=useState();
    const [loading,setLoading]=useState();
    const [response,setResponse]=useState();
    async function getContent(){
        setLoading(true);
        setResponse("");
        const res=await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=",{
            contents: prompt
        })
        setResponse(res);
    }
  return (
    <div>
      <input 
      value={prompt}
      onChange={(e)=>setPrompt(e.target.value)}
      type="text" />
      <button onClick={getContent}>Ask Gemini</button>
      <div>{loading? "Loading..": response}</div>
    </div>
  )
}

export default TaskB
