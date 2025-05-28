
// Action Creator
export const actionCreator = (actionType:string, selected:string, aditionalsProps?:any) => {
    const action:any = {
        type: actionType,
        option: selected
    }
    
    // To merge one object into another can use Object.assign for merge and return a new object
    return Object.assign({}, action, aditionalsProps); 
    
    // Or can use spread operation.
    // return {
    //     ...action,
    //     ...aditionalsProps
    // }
}