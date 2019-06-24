import firebase from './firebase.js';
import React from 'react';
import GoBack from './GoBack.js';
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
              this.state.users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.credits}</td>
                    <td>
                      <button 
                      onClick = {() => {this.props.onClick(<User 
                                                            uid = {user.uid} 
                                                            goBack = {() => {
                                                                              this.props.goBack()
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
          <GoBack
          goBack = {() => {this.props.goBack()}}
          />
          </>
        );
    }
}

export default AllUsers;