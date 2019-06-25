import React from 'react';
import firebase from './firebase.js';
import GoBack from './GoBack.js';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';

class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.name = '';
        this.email = '';
        this.credits = '';
        this.state = {
            value: '-1',
            usersList: [],
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value,
            usersList: this.state.usersList,
        });
    }
    
    handleSubmit(event) {
        let amount = event.target[1].value;
        this.transferCredit(amount, this.props.uid, this.state.value);
        event.target[1].value = 0;
        event.preventDefault();
    }

    transferCredit(amount, from_uid, to_uid) {
        const usersRef = firebase.database().ref('users');
        let from_user;
        let to_user;

        usersRef.once('value', (dataSnaphot) => {
            const users = dataSnaphot.val();
            from_user = {
                name: users[from_uid].name,
                email: users[from_uid].email,
                credits: Number(users[from_uid].credits) - Number(amount),
            };
            to_user = {
                name: users[to_uid].name,
                email: users[to_uid].email,
                credits: Number(users[to_uid].credits) + Number(amount),
            };
        });

        firebase.database().ref('users/'+from_uid).set(from_user);
        firebase.database().ref('users/'+to_uid).set(to_user);

        this.updateTransactions(amount, from_uid, to_uid);
    }

    updateTransactions(amount, from_uid, to_uid){
        const transfersRef = firebase.database().ref('transfers');
        transfersRef.push(
            {
                from: from_uid,
                to: to_uid,
                credits: Number(amount),
            }
        );
        this.openPopupbox();
    }

    openPopupbox() {
        const content = (
          <div>
            <p>
                Your transaction was successful
            </p>
          </div>
        )
        PopupboxManager.open({ content })
      }

    componentDidMount() {
        const usersRef = firebase.database().ref('users');
        usersRef.on("value", (dataSnapshot) => {
            let users = dataSnapshot.val();
            let usersList = [];
            for (let uid in users) {
                usersList.push({
                    uid: uid,
                    name: users[uid].name,
                })
            }
            this.name = users[this.props.uid].name;
            this.email = users[this.props.uid].email;
            this.credits = users[this.props.uid].credits;
            this.setState({
                value: this.state.value,
                usersList: usersList,
            });
        });
    }
    
    render() {
        const popupboxConfig = {
            fadeIn: true,
            fadeInSpeed: 500
        }

        return (
            <>
            <h1>{this.name}</h1>
            <p>{this.email}</p>
            <p>Credits : {this.credits}</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select User 
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value = '-1'>Select user to transfer to</option>
                    {
                        this.state.usersList.map((user) => {
                            return (<option value = {user.uid}>{user.name}</option>);
                            })
                    }
                </select>
                </label>
                <label>
                    Amount
                    <input type="number" min="0" max={this.credits}/>
                </label>
                <input type="submit" value="Transfer" />
            </form>
            <PopupboxContainer { ...popupboxConfig } />
            <GoBack
            goBack = {() => {this.props.goBack()}}
            />
            </>
        );
    }
}

export default Transfer ;