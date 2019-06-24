import React from 'react';
import AllUsers from './AllUsers.js';
import Transactions from './Transactions.js';

class HomePage extends React.Component {
    render() {
        return (
            <>
            <button 
            onClick = {() => this.props.onClick(<AllUsers 
                                                goBack = {() => {this.props.goBack()}}
                                                onClick = {(page) => {this.props.onClick(page)}}
                                                />)
                        }
            >
                Show All Users
            </button>
            <button
            onClick = {() => this.props.onClick(<Transactions 
                                                goBack = {() => {this.props.goBack()}} 
                                                />)
                        }
            >
                Show All Transactions
            </button>
            </>
        );
    }
}

export default HomePage;