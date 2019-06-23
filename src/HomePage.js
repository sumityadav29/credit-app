import React from 'react';
import AllUsers from './AllUsers.js';

class HomePage extends React.Component {
    render() {
        return (
            <>
            <button onClick = {() => this.props.onClick(<AllUsers goBack = {() => {this.props.goBack()}}/>)}>All Users</button>
            <button>Transactions</button>
            </>
        );
    }
}

export default HomePage;