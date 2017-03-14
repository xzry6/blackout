import * as React from 'react';
import {render} from 'react-dom';
import {hashHistory, IndexRoute, Link, Route, Router} from 'react-router';

import ComposeView from './components/compose/ComposeView';
import DocumentView from './components/document/DocumentView';
import HistoryView from './components/history/HistoryView';
import Hello from './components/hello/Hello';
import Session from './models/Session';
import SessionStore from './stores/SessionStore';


const Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to='/hello'>Hello</Link></li>
          <li><Link to='/compose'>Compose</Link></li>
          <li><Link to='/history'>History</Link></li>
          <li><Link to='/document'>Document</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

let sampleSessions: Session[] = [new Session(1), new Session(2)];
const sampleSessionStore = new SessionStore(sampleSessions);

// Router.
render((
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <Route path='hello' component={Hello} />
      <Route path='compose' component={ComposeView} />
      <Route path='history'
        component={() => <HistoryView sessionStore = {sampleSessionStore} />}
      />
      <Route path='document' component={DocumentView} />
    </Route>
  </Router>
), document.getElementById('example'));
