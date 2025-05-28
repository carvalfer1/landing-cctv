import { reduxActionStructure } from './commonInterfaces';
import voteHistory from '../../models/voteHistory';
import * as storeActions from '../actions/actionsTypes';

export interface reduxHistoryState {
    history:voteHistory[]
}

const initialState: reduxHistoryState = {
    history: []
}

const historyReducer = (oldState:reduxHistoryState = initialState, action:reduxActionStructure) => {
    // can do it this way, we create a new object with the same properties than oldState. 
    // let newState = {...oldState};

    // This way we create a copy in a immutability way of the oldState. 
    let newState = Object.assign({},oldState);
    switch(action.type)
    {
        case storeActions.SAVE_VOTE:
                newState = {
                    history: oldState.history.concat({vote:action.option, id:Date.now().toString(), date: new Date().toString()})
                }
            break;
        case storeActions.DELETE_VOTE:
                // const newArrayHistory = [...oldState.history];
                // const index = newArrayHistory.indexOf((i:any)=>{return i.id === action.id});
                // newArrayHistory.splice(index,1);

                const newArrayHistory = oldState.history.filter((i: any) => i.id !== action.id);
                newState = {
                    history : newArrayHistory
                };
            break;

    }
    return newState;
}

export default historyReducer;