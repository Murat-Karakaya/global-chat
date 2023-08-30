import { configureStore, createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "userSlice",
    initialState: {username: "", id: ""},
    reducers: {
        setUser(state, action){
            if (action.payload) {
                state.username = action.payload.username
                state.id = action.payload.id
            }
        }
    }
})

const messageSlice = createSlice({
    name: "messageSlice",
    initialState: [],
    reducers: {
        addMessage(state, action){
            action.payload.text && state.push(action.payload)
        },
        setMessages(state, action){
            state.splice(0, state.length)
            action.payload && action.payload.map(message => state.push(message))
        }
    }
})


export const userActions = userSlice.actions
export const messageActions = messageSlice.actions


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        messages: messageSlice.reducer
    }
})