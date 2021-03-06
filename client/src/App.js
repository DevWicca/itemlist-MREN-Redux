import React, { Component } from 'react';
import AppNavbar from './companents/appNavbar'
import ItemList from './companents/ItemList'
import ItemModal from './companents/itemModal'

import {Container} from 'reactstrap'
import {Provider} from 'react-redux'
import store from './store'
import { loadUser } from "./actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
            <ItemModal/>
            <ItemList/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
