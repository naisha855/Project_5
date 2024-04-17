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
    initialState: [],
    reducers: {
        removeCount(state, action){
            let idx = state.findIndex(a => a.id === action.payload) 
            --state[idx].amount;
            if (state[idx].amount < 1){
                alert('최소 주문 수량은 1개 입니다.');
                state[idx].amount = 1;
            }
        },
        addCount(state, action){
            let idx = state.findIndex(a=> a.id === action.payload)
            ++state[idx].amount;
        },
        sortName(state){
            state.sort((a,b)=>a.item > b.item ? 1 : -1,)
        },
        removeItem(state, action){
            let num = state.findIndex(a => a.id === action.payload)
            state.splice(num, 1)
        },
        addItem(state, action){
            if (action.payload.type === 'addObj'){
                let num = state.findIndex(a => a.id === action.payload.id)
                if(num >= 0){
                    state[num].count++;
                } else {
                    state.push(action.payload);
                }
            }
        },
    }
})
export let { removeCount, addCount, sortName,removeItem,  addItem} = cart.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})