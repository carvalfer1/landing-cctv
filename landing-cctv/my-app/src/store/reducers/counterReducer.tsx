import { reduxActionStructure } from './commonInterfaces';
import * as storeActions from '../actions/actionsTypes';

export interface reduxState {
    jestCounter: number,
    reduxCounter: number,
    sassCounter: number
}

const initialState: reduxState = {
    jestCounter: 0,
    reduxCounter: 0,
    sassCounter: 0
}

const getValueState = (vote:string, oldState:reduxState):number => {
    switch (vote){
        case 'jestCounter': 
            return oldState.jestCounter;
        case 'reduxCounter':
            return oldState.reduxCounter;
        case 'sassCounter':
            return oldState.sassCounter;    
    }
    return 0;
}

const counterReducer = (oldState:reduxState = initialState, action:reduxActionStructure) => {
    // can do it this way, we create a new object with the same properties than oldState. 
    // let newState = {...oldState};

    // This way we create a copy in a immutability way of the oldState. 
    let newState = Object.assign({},oldState);
    switch(action.type)
    {
        case storeActions.INC_COUNTER:
                newState = {
                    ...oldState,
                    [action.option.toString()]: getValueState(action.option, oldState) + 1
                };
            break;
        case storeActions.DEC_COUNTER:
                newState = {
                    ...oldState,
                    [action.option.toString()]: getValueState(action.option, oldState) - 1
                };
            break;
    }
    return newState;
}

export default counterReducer;