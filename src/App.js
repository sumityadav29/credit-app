import React from 'react';
import './App.css';
import HomePage from './HomePage.js';
import GoBack from './GoBack';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content : <HomePage 
                onClick = {(page) => {this.handlePageRequest(page)}}
                />,
      history: [],
    }
    this.handleGoingBack.bind(this);
  }

  handlePageRequest(page) {
    this.setState({
      content: page,
      history: this.state.history.concat(this.state.content),
    });
  }

  handleGoingBack(){
    if (!this.state.history[0]){
      return;
    }
    this.setState({
      content: this.state.history.pop(),
      history: this.state.history,
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>Credit <br/>Management <br/>App</p>
          <GoBack goBack = {() => this.handleGoingBack()}/>
        </header>
        <main style = {{'backgroundImage': 'linear-gradient(to bottom left, rgba(198,80,192,0.2),rgba(67,88,208,0.2))', 'padding': '100px', 'minHeight': '68vh'}}>
          <div class = 'maincontainer'>
            {this.state.content}
          </div>
        </main>
      </div>
    );
  }
}

export default App;