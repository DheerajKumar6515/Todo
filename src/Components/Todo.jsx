import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../feature/todos/todosSlice';

function Todo() {
    const [text,setText]=useState('')
     
    const dispatch=useDispatch();

    const add=()=>{
        if(!text) return
        dispatch(addtodo(text))
        setText('')
    }

  return (
    <div className="one  w-full h-14">       
         <input type="text" className='h-full text-lg w-[85%] px-2 rounded-md outline-none' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter your task...' />
         <button className='w-[15%] h-full text-white rounded-md bg-green-500 hover:bg-green-600 text-lg  font-medium' onClick={add}>Add</button>
      </div>
  )
}

export default Todo
