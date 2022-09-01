import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './src/reducers'
 
const store = configureStore({ reducer: combineReducers })

export default store;