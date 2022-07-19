import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { mockApi } from './services/mockapi'
// import mockapiReducer from './features/mockapiSlice'

export const store = configureStore({
    reducer: {
        [mockApi.reducerPath]: mockApi.reducer,
        // mockapi: mockapiReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mockApi.middleware),
})

setupListeners(store.dispatch)