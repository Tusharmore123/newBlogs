import { createSlice } from "@reduxjs/toolkit";




const initialState={
    signIn:false,
    userData:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        logIn:(state,action)=>{
            state.signIn=true;
            state.userData=action.payload;
        },
        logOut:(state,action)=>{
            state.signIn=false;
            state.userData=null
        }
    }
}
);

export default authSlice.reducer;
export const {logIn,logOut}=authSlice.actions;
