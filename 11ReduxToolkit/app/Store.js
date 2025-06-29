import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../src/features/todo/todoSlice.js'


export const store  = configureStore({
    reducer:todoReducer
})