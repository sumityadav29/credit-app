import React from 'react';
import AllUsers from './AllUsers.js';
import Transactions from './Transactions.js';

class HomePage extends React.Component {
    render() {
        return (
            <>
            <button
            class = 'styledbutton'
            onClick = {() => this.props.onClick(<AllUsers 
                                                onClick = {(page) => {this.props.onClick(page)}}
                                                />)
                        }
            >
                Show All Users
            </button>
            <button
            class = 'styledbutton'
            onClick = {() => this.props.onClick(<Transactions/>)
                        }
            >
                Show All Transactions
            </button>
            </>
        );
    }
}

export default HomePage;