import React from 'react';
import firebase from './firebase.js';

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
            <h1>All Transactions</h1>
            <table class = 'transactions'>
                <thead class = 'tableheader'>
                    <td>From</td>
                    <td>To</td>
                    <td>Credits</td>
                </thead>
                <tbody>
                    {
                        this.state.items.map((item) => {
                            return (
                                <tr>
                                    <td class = 'transdata'>{item.from}</td>
                                    <td class = 'transdata'>{item.to}</td>
                                    <td class = 'transdata'>{item.credits}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            </>
        );
    }
}

export default Transactions;