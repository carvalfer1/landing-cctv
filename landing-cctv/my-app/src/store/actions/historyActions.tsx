import { SAVE_VOTE, DELETE_VOTE } from './actionsTypes';
// Middlewares
// This function runs when components dispatch an action.
// Then, can access to the store dispatcher (its possible beacouse we are using redux-thunk, its injected into redux store in index.tsx line 33)
export const saveVote = (selected:string) => {
    return {
        type: SAVE_VOTE,
        option: selected
    }
};

export const deleteVote = (selected:string, idToDelete:string) => {
    return {
        type: DELETE_VOTE,
        option: selected,
        id: idToDelete
    }
};