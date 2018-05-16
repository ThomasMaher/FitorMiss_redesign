import React from 'react';
import { Provider, connect } from 'react-redux';
import { withRouter, HashRouter, Route } from 'react-router-dom';

import {configureStore} from '../store';

import Header from './headers.js';
import Classes from './classes/classes.js';

const store = configureStore();

const App = ({ children }) => (
  <div className="app">
      { children }
  </div>
);

// const App = withRouter(connect()(ConnectedApp));

const Root = () => {
    return (
      // <Provider>
        <HashRouter>
          <App>
            <Route path="/" component={Header} />
            <Route path="/" component={Classes} />

          </App>
        </HashRouter>
      // </Provider>
    );
};


export default Root;
