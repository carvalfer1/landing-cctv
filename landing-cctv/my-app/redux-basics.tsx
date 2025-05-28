// start: node redux-basics.tsx

const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    jestCounter: 0,
    reduxCounter: 0,
    sassCounter: 0
};

// Reducer
const rootReducer = (oldState = initialState, action) =>{
    let newState = {...oldState};
    switch(action.type)
    {
        case 'INC_COUNTER':
                newState = {
                ...oldState,
                [action.option]: oldState[action.option] + 1
            };
            break;
        case 'ADD_COUNTER':
                newState = {
                ...oldState,
                [action.option]: oldState[action.option] + action.value
            };
            break;

    }
    return newState;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription -> it execute each time the state change. Triggered whenever the state is updated.
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Despatching Action
store.dispatch({type: 'INC_COUNTER', option: 'jestCounter'});
store.dispatch({type: 'ADD_COUNTER', option: 'jestCounter', value: 4});
console.log(store.getState());


