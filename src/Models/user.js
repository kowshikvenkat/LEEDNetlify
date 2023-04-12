import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{value:{name:"",img:"",email:""}},
    reducers :{
        login:(state,action)=>{
            state.value = action.payload
        },
        logout:(state)=>{
            state.value = {name:"",img:"",email:""}
        }
    }
})

export const {login,logout} = userSlice.actions

export default userSlice.reducer
