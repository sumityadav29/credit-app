import React from 'react';
import firebase from './firebase.js';
import GoBack from './GoBack.js';
import Transfer from './Transfer.js';

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {user:""};
    }

    componentDidMount(){
        const usersRef = firebase.database().ref('users');
        
        usersRef.on("value", (snapshot) => {
          let users = snapshot.val();
          let newState = {user: users[this.props.uid]};
          this.setState(newState);
        });
    }

    render(){
        return(
            <>
            <h1>{this.state.user.name}</h1>
            <p>{this.state.user.email}</p>
            <p>Credits : {this.state.user.credits}</p>
            <button 
            onClick = {() => {
                                this.props.onClick(<Transfer
                                                    uid = {this.props.uid}
                                                    goBack = {() => this.props.goBack()}
                                                    />
                                                )
                            }
                    }
            >
                Transfer Credits
            </button>
            <GoBack
            goBack = {() => {this.props.goBack()}}
            />
            </>
        );
    }
}

export default User;