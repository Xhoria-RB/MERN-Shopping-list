import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

//Provider >> bind redux and react, so to get the states inside our store we need to grab everythink inside the provider
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
