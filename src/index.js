import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MainRoute from './Route';

// https://github.com/orgs/community/discussions/64096
ReactDOM.render(
  <HashRouter>
    <div>
      <MainRoute />
    </div>
  </HashRouter>,
  document.querySelector('#root'),
);
