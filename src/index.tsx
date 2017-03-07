import * as React from 'react';
import {render} from 'react-dom';
import {hashHistory, IndexRoute, Link, Route, Router} from 'react-router';

import Hello from './components/hello/Hello';
import App from './components/app/App';


const Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="hello" component={Hello} />
      <Route path="app" component={App} />
    </Route>
  </Router>
), document.body)
