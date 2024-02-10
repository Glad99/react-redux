import {createSlice} from "@reduxjs/toolkit"

const initialState = {counter: 0, name: "Ope"};

export const counterSlice= createSlice(

    {
        name:"counter",
        initialState,
        reducers:{
            increment:(state)=>{
                state.counter+=1
                state.name = "GMC"
            },
            decrement: (state)=>{
                state.counter === 0 ? state.counter = 0 : state.counter-=1
                state.name="GMC 3"
            }
    }
}
)

export const{increment, decrement} = counterSlice.actions

export default counterSlice.reducer