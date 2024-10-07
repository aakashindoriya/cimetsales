import { createSlice } from "@reduxjs/toolkit";



const todoSlice=createSlice({
    name:"todos",
    initialState:{
        todo:[],
        isEditable:false,
        inputText:"",
        activeEditId:null
    },
    reducers:{
        setInput:(state,action)=>{
            state.inputText=action.payload
        },
        addTodo:(state,action)=>{
            state.todo.push({
                id:Date.now(),
                text:state.inputText,
                isCompleted:false
            })
            state.inputText=""
        },
        setEdit:(state,action)=>{
            state.isEditable=true
            state.inputText=action.payload.text
            state.activeEditId=action.payload.id
        },
        updateTodo:(state,action)=>{
            state.todo=[...state.todo.map(item=>item.id===state.activeEditId? {...item,text:state.inputText}:item)]
            
            state.isEditable=false
            state.inputText=""
            state.activeEditId=null
        },
        deleteTodo:(state,action)=>{
            state.todo=state.todo.filter((el)=>el.id!==action.payload)
        },
        toggleTodo:(state,action)=>{
            state.todo=state.todo.map(item=>item.id===action.payload? {...item,isCompleted:!item.isCompleted}:item)
        }
    }
})


export const {setInput,addTodo,setEdit,updateTodo,deleteTodo,toggleTodo}=todoSlice.actions

export default todoSlice.reducer;