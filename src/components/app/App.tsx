import * as React from 'react';
import {observer} from 'mobx-react';

import Session from '../../models/Session';
import SessionStore from '../../stores/SessionStore';
import SessionView from './SessionView';


@observer
// TODO: (xzry6) change class name
class App extends React.Component<{sessionStore: SessionStore}, undefined> {
  render() {
    const sessions: Session[] = this.props.sessionStore.sessions;
    const sessionViews: JSX.Element[] = sessions.map((session: Session) =>
      <SessionView key={session.id} session={session} />
    );

    if(sessions.length == 0) {
      return null;
    }
    return <ul>{sessionViews}</ul>;
  }
}

export default App;
