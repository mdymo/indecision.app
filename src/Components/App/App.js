import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Log from '../Log/Log';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Logowanie</h1>
        </header>
        <Log />
      </div>
    );
  }
}

export default App;
