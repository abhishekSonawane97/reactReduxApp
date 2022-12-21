import { configureStore } from '@reduxjs/toolkit'
import customThaliReducer from './Slices/Thalislice'

export const store = configureStore({
    reducer: {
        customThali: customThaliReducer,
      },
})