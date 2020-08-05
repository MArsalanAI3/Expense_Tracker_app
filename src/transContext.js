import  React,{createContext, useReducer} from 'react'
import TransactionReducer from './transReducer';

const initialtransaction=[
    { amount : 500 ,  desc:"Cash "},
    { amount : -50 ,  desc:"Cold Drink "},
    { amount : -200 , desc:"Camera "},
    { amount : -90 ,  desc:"soft Drink "},

]


export const TransactionContext=createContext(initialtransaction);


export const TransactionProvider=({children })=>{
    let [state,dispatch]=useReducer(TransactionReducer,initialtransaction);

    function addTransaction(transObj){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                amount:transObj.amount,
                desc:transObj.desc
            },
        })
    }
    return(
        <TransactionContext.Provider value={{ 
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}