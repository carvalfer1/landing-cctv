import { INC_COUNTER, DEC_COUNTER } from './actionsTypes';
import { actionCreator } from './actionsCreators';

// Middlewares
// This function runs when components dispatch an action.
// Then, can access to the store dispatcher (its possible beacouse we are using redux-thunk, its injected into redux store in index.tsx line 33)
export const incCounter = (selected:string) => {
    return (dispatch:any, getState:any) => {
        setTimeout(()=>{
            const oldValue = getState().counter[selected]; // Allows access into store states
            console.log("Last Value: " + oldValue);
            dispatch(actionCreator(INC_COUNTER, selected));
        },500);
    };
};

export const decCounter = (selected:string) => {
    return {
        type: DEC_COUNTER,
        option: selected
    }
};