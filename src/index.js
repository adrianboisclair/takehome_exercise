import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css'
import App from './App'
import About from './pages/about';
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
