import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos : []
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false,
            }
            state.todos.push(todo);
        },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id !== action.payload));
        },
        updatetodo:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id !== action.payload) return todo
                return{
                    ...todo,text:action.payload
                }
            })
        },
        toggletodo:(state,action)=>{
          
            state.todos=state.todos.map((todo)=>{
                
                if(todo.id !== action.payload) return todo
                return{
                    ...todo,completed:!todo.completed,
                }
            })
        },
    }
})

export const {addtodo,removetodo,updatetodo,toggletodo}=todoSlice.actions

export default todoSlice.reducer;

