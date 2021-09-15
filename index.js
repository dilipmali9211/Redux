//console.log("hello")
const redux = require('redux')
const creatstore = require('redux').createStore

const SELL_LAPTOP = 'SELL_LAPTOP';
const BUY_LAPTOP = 'BUY_LAPTOP';

//action

function buynewlaptop() {
    return {
       type: BUY_LAPTOP
    }
}
function selloldlaptop() {
    return {
        type: SELL_LAPTOP
    }
}

//Reducer

const initialState = {
    noOfLaptops: 10
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_LAPTOP:
            return {
                ...state,
                noOfLaptops: state.noOfLaptops + 1
            }
            break;
        case SELL_LAPTOP:
            return {
                ...state,
                noOfLaptops: state.noOfLaptops - 1
            }
            break;
            default:
            return state;
    }
}

//store
let store = creatstore(rootReducer)

console.log(store.getState())

console.log(store.dispatch(buynewlaptop()))
console.log(store.dispatch(selloldlaptop()))

console.log(store.getState())