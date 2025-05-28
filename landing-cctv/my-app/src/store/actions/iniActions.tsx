import { GET_INI, SET_VOTE } from './actionsTypes';
import { actionCreator } from './actionsCreators';
const axios = require("axios");

export const iniActions = () => 
{
    return (dispatch:any, getState:any) => 
    {
        setTimeout(() => {
            axios.get('http://localhost:8080/api/options/mapped')
                    .then((response:any) => {
                        return dispatch(actionCreator(GET_INI, "", { results: response.data }));
                    })
                    .catch((error:any)=>{
                        console.log("error in action iniActions",error)
                    })
        }
        ,0);
        
    }
}

export const setVote = (optionId:number) => {
    return (dispatch:any, getState:any) => {
        const body = {
                        vote: {
                            id: optionId
                        }
                    }
       axios.post('http://localhost:8080/api/votation', body)
       .then((response:any)=>{
                return dispatch(actionCreator(SET_VOTE, "", { results: optionId }));
            })
            .catch((error:any)=>{
                console.log("error in action iniActions",error)
            });  
    }
}