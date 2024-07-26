import { createSlice } from "@reduxjs/toolkit";

let sidebar = createSlice({

 name : "sidebar",
 initialState : {

    toggle : true

 },
 reducers :{

    addToggle : (state,action)=>{

       state.toggle = !state.toggle
    },
    removeMenu : (state,action)=>{

       state.toggle = false
    },
    addMenu : (state )=>{
     state.toggle = true;
    }
 }
})


export const{addToggle,removeMenu,addMenu} = sidebar.actions

export default sidebar.reducer