import * as React from 'react';
import {render} from 'react-dom';
import {hashHistory, IndexRoute, Link, Route, Router} from 'react-router';

import App from './components/app/App';
import Hello from './components/hello/Hello';
import Session from './models/Session';
import SessionStore from './stores/SessionStore';


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

var sampleSessions: Session[] = [new Session(1), new Session(2)];
const sampleSessionStore = new SessionStore(sampleSessions);

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="hello" component={Hello} />
      <Route path="app" component={() => (<App sessionStore = {sampleSessionStore}/ >)} />
    </Route>
  </Router>
), document.getElementById('example'));
