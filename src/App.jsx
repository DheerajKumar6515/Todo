import React from 'react'
import Todo from './Components/Todo'
import Newtodo from './Components/Newtodo'
import { useSelector } from 'react-redux'

function App() {

    const todos=useSelector((state)=>state.todos)

  return (
    <>
    <div className="container w-full h-screen flex flex-col items-center justify-center bg-slate-700 max-w-full">
      <h1 className='text-5xl text-center text-white font-serif font-medium -mt-32'>Manage Your Todo.</h1>
     <div className="boxes w-[22rem] md:w-1/2 h-96  mt-12">
          {/* Todo */}
          <Todo/>
      <div className="two w-full h-auto mt-1">
           {/* Newtodo through looping*/}
            {todos.map((todo)=>(<Newtodo key={todo.id} todo={todo}/>))}
      </div>
     </div>
    </div>
      
    </>
  )
}

export default App
