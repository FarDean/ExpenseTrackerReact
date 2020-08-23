import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Balance() {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((total,num)=> total+num,0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
