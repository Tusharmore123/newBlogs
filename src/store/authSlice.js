import { createSlice } from "@reduxjs/toolkit";

const initialState={
signIn:false,
userData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.signIn=true
            state.userData=action.payload
        },
        logout:(state,action)=>{
            state.signIn=false
            state.userData=null

        }
    }

})

export const {login,logout}=authSlice.actions;
export default authSlice.reducer