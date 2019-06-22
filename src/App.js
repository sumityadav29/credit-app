import React from 'react';
import './App.css';
import HomePage from './HomePage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content : <HomePage onClick = {(page) => {this.handlePageRequest(page)}}/>,
    }
  }

  handlePageRequest(page) {
    this.setState({
      content: page,
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Credit Management App
        </header>
        <main>
          {this.state.content}
        </main>
      </div>
    );
  }
}

export default App;
