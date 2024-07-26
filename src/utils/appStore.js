import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from './sidebarSlice'

let appstore = configureStore({
    reducer : {
        sidebar  : sidebarReducer
    }
})

export default appstore;