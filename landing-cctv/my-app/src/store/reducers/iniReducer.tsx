import * as storeActions from '../actions/actionsTypes';
import { reduxActionStructure } from './commonInterfaces';

interface reduxIniReducerState
{
    optionsMapped:any
}

const initialState = {
    optionsMapped:[]
}

const iniReducer = (oldState: reduxIniReducerState = initialState, actions: reduxActionStructure) => {
    switch(actions.type)
    {
        case storeActions.SET_VOTE:
            const newState = oldState.optionsMapped.map((i:any) => {
                if (i.id === actions.results)
                {
                    return {
                        ...i,
                        votesCount: i.votesCount + 1
                    }
                }
                else{
                    return i;
                }
            });
            return { optionsMapped: newState };
        case storeActions.GET_INI:
            return { optionsMapped: actions.results };
        default:
            return oldState;
    }
}

export default iniReducer;