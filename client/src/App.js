import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { GlobalStyles } from './components/utilities';

import store from './store';

import Routers from './components/Routers';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <Routers />
        </Provider>
    );
  }
}

export default App;
