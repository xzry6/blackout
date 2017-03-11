import * as React from 'react';
import {observer} from 'mobx-react';

import Session from '../../models/Session';
import SessionStore from '../../stores/SessionStore';


@observer
// TODO: (xzry6) change class name
class App extends React.Component<{sessionStore: SessionStore}, undefined> {
  render() {
    const sessions = this.props.sessionStore.sessions
    if(sessions.length == 0) {
      return null;
    }
    return (
      <ul>
        {sessions.map((session: Session) =>
          <li key={session.id}>
            {session.id}
          </li>
        )}
      </ul>
    )
  }
}

export default App;
