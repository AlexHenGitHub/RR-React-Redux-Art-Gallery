import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'
import { logger } from './features/middleware'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})
