import { connect } from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';
import { ADD_TRANSACTIONS } from '../actions/types';

function Transactions({
    addTransactions,
    transacts
}) {

    const handleFetch = () => {
        axios.get('/api/data').then(response => addTransactions(response.data))
    }

    return (<div>
        <button onClick={handleFetch}>Fetch data</button>
        <ul>
            {transacts.map((transaction) => <li>{transaction.amount}</li>)}
        </ul>
    </div>)

}

const mapStateToProps = (state) => {
    return {
        transacts: state.transactions,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTransactions: (data) => dispatch({type: ADD_TRANSACTIONS, payload: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
