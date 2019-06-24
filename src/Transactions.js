import React from 'react';
import firebase from './firebase.js';
import GoBack from './GoBack.js';

class Transactions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount(){
        const itemsRef = firebase.database().ref('transfers');
        const usersRef = firebase.database().ref('users');
        let newState = [];
        itemsRef.on("value", (snapshot) => {
          let transfers = snapshot.val();
          for (let item in transfers) {
              let from;
              let to;
              usersRef.once("value", (snapshot) => {
                  let users = snapshot.val();
                  from = users[transfers[item].from].name;
                  to = users[transfers[item].to].name;
                  newState.push({
                    from: from,
                    to: to,
                    credits: transfers[item].credits,
                  });
                  this.setState({
                    items : newState,
                  });
                });
          }
        });
    }
    render(){
        return(
            <>
            <table>
                <caption>All Transactions</caption>
                <thead>
                    <td>From</td>
                    <td>To</td>
                    <td>Credits</td>
                </thead>
                <tbody>
                    {
                        this.state.items.map((item) => {
                            return (
                                <tr>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>{item.credits}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <GoBack
            goBack = {() => {this.props.goBack()}}
            />
            </>
        );
    }
}

export default Transactions;