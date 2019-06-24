import firebase from './firebase.js';
import React from 'react';
import GoBack from './GoBack.js';
import User from './User.js'

class AllUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          items: [],
        };
      }
    
      componentDidMount() {
        const itemsRef = firebase.database().ref('users');
        let newState = [];
        itemsRef.on("value", (snapshot) => {
          let items = snapshot.val();
          for (let item in items) {
            newState.push({
              name : items[item].name,
              email : items[item].email,
              credits : items[item].credits,
              uid : item,
            });
          }
          this.setState({
            items : newState,
          });
        });
      }


    render() {
        return (
            <>
            <table>
            <caption>All Users</caption>
            <thead>
              <td>Name</td>
              <td>Email</td>
              <td>Credits</td>
              <td>View User</td>
            </thead>
            <tbody>
            {
              this.state.items.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.credits}</td>
                    <td><button onClick = {() => {this.props.onClick(<User uid = {item.uid} goBack = {() => {this.props.goBack()}}/>)}}>View</button></td>
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

export default AllUsers;