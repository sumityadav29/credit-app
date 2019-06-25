import firebase from './firebase.js';
import React from 'react';
import User from './User.js'

class AllUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          users: [],
        };
      }
    
      componentDidMount() {
        const usersRef = firebase.database().ref('users');
        let newState = [];
        usersRef.on("value", (snapshot) => {
          let users = snapshot.val();
          for (let item in users) {
            newState.push({
              name : users[item].name,
              email : users[item].email,
              credits : users[item].credits,
              uid : item,
            });
          }
          this.setState({
            users : newState,
          });
        });
      }


    render() {
        return (
            <>
            <h1>All Users</h1>
            <table class = 'users'>
            <thead class = 'tableheader'>
              <td>Name</td>
              <td>Email</td>
              <td>Credits</td>
              <td>View User</td>
            </thead>
            <tbody>
            {
              this.state.users.map((user) => {
                return (
                  <tr>
                    <td class = 'userdata'>{user.name}</td>
                    <td class = 'userdata'>{user.email}</td>
                    <td class = 'userdata'>{user.credits}</td>
                    <td class = 'userdata'>
                      <button 
                      onClick = {
                        () => {
                          this.props.onClick(<User 
                                              uid = {user.uid} 
                                              onClick = {
                                                (page) => {
                                                  this.props.onClick(page)
                                                }
                                              }
                                              />
                                            )
                          }
                        }
                        >
                          View
                        </button>
                      </td>
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

export default AllUsers;