import * as React from 'react';
import {observer} from 'mobx-react';

import Session from '../../models/Session';
import SessionStore from '../../stores/SessionStore';
import SessionView from './SessionView';


@observer
// TODO: (xzry6) change class name
class App extends React.Component<{sessionStore: SessionStore}, undefined> {
  activeSessionId?: number;

  render() {
    const sessions: Session[] = this.props.sessionStore.sessions;
    const sessionViews: JSX.Element[] = sessions.map((session: Session) =>
      <SessionView
        key={session.id}
        session={session}
        isActive={this.activeSessionId && session.id == this.activeSessionId}
      />
    );

    return sessions.length == 0 ? null : <ul>{sessionViews}</ul>;
  }
}

export default App;
