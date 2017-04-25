import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';


class App extends Component {

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyC5isuGLs4Y-Nnvtt53M7amzLliiTb5XCk',
    authDomain: 'manager-app-644bf.firebaseapp.com',
    databaseURL: 'https://manager-app-644bf.firebaseio.com',
    projectId: 'manager-app-644bf',
    storageBucket: 'manager-app-644bf.appspot.com',
    messagingSenderId: '86888177167'
  };
  firebase.initializeApp(config);
 }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
