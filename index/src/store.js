import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        changeName(state){
            state.name = 'john kim'
        },
        increase(state, action){
        
            state.age += action.payload
        }
    }
})

export let {changeName, increase} = user.actions

let cart = createSlice ({
    name: 'cart',
    initialState: [
        {id:0, item: "white and Black", amount: 2},
        {id:2, item: 'Grey Yordan', amount: 1}
    ],
    reducers: {
        addCount(state, action){
            let idx = state.findIndex((a)=>{return a.id === action.payload})
            ++state[idx].amount;
        },
        sortName(state){
            state.sort((a,b)=>a.item> b.item ? 1:-1,);
        },
        addItem(state, action){
            console.log(action.payload)
            state.push(action.payload)
        },
    }
})
export let { addCount, sortName, addItem} = cart.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})