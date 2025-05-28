export const updateObject = (oldState:any, propsToUpdate:any) => {
    return {
        ...oldState,
        ...propsToUpdate
    };
};