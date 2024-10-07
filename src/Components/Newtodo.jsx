import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { removetodo,updatetodo,toggletodo } from '../feature/todos/todosSlice'

function Newtodo({todo}) {
    //const todo=useSelector(state=>state.todos)
    const [todomsg,settodomsg]=useState(todo.text)
    const [Editable,setEditable]=useState(false)
    const dispatch=useDispatch()

    const updates=()=>{
        dispatch(updatetodo(todomsg,todo.id));
        setEditable(false)
    }
    const toggles=()=>{
        dispatch(toggletodo(todo.id))
    }


  return (
    <div className={`box w-full flex items-center  mb-1 justify-between h-14 rounded-md ${todo.completed ? "bg-green-400":"bg-purple-400"} `}>
    <div className="checkbox ml-2  h-4  sm:w-6 overflow-hidden flex items-center justify-center rounded-md">
    <input type="checkbox" className='w-full h-full ' onChange={toggles} disabled={todo.completed} />
    </div>
    <div className="text h-full w-52   sm:ml-[0px] md:w-[30rem] ml-[-39px]">
    <input type="text" readOnly={!Editable} value={todomsg} onChange={(e)=>settodomsg(e.target.value)} className={`w-full h-full ml-4 outline-none ${todo.completed ? "bg-green-400 line-through":"bg-purple-400"} px-2 text-lg`}/>
    </div>
    <div className="btn  h-full flex items-center gap-2 rounded-md w-20 sm:mr-1 md:w-28 ">
    <button className='border-2 w-12  h-12 rounded-md text-2xl' onClick={()=>{
        if(todo.completed) return;
        if(Editable){
            updates()
        }else{
            setEditable((prev)=>!prev)
        }
    }} disabled={todo.completed}>{Editable ? "📂":"✏️"}</button>
    <button className='border-2 w-12 h-12  rounded-md text-2xl' onClick={()=>dispatch(removetodo(todo.id))} disabled={todo.completed}>❌</button>
    </div>         
</div>
  )
}

export default Newtodo
