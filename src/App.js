import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import List from './List'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
   
      <div className="App">
        <List/>
      </div>
      </Provider>
    );
  }
}

export default App;
