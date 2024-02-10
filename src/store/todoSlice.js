import {createSlice} from "@reduxjs/toolkit" 


export const todoSlice= createSlice(
    {
        name:"todo",
        initialState: {todoList: [{id:1, text: "hello world", completed:false }]}
        reducers:{
               
            decrement: (state)=>{
                state.counter === 0 ? state.counter = 0 : state.counter-=1
                state.name="GMC 3"
            }
    } 
}
)