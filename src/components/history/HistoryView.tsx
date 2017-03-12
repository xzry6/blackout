import * as React from 'react';
import {observer} from 'mobx-react';

import Session from 'models/Session';
import SessionStore from 'stores/SessionStore';
import SessionView from './session/SessionView';


interface HistoryProps { sessionStore: SessionStore; }
interface HistoryState { activeSessionId?: number; }

@observer
class HistoryView extends React.Component<HistoryProps, HistoryState> {

  constructor() {
    super();
    this.state = { activeSessionId: undefined };
    // NOTE: this binding is necessary to make `this` work in the callback.
    this.handleClickOnSession = this.handleClickOnSession.bind(this);
  }

  render() {
    const sessions: Session[] = this.props.sessionStore.sessions;
    // NOTE: keys attribute help React identify which items have changed.
    const sessionViews: JSX.Element[] = sessions.map((session: Session) =>
      <SessionView
        isActive={
          this.state.activeSessionId &&
          this.state.activeSessionId == session.id
        }
        key={session.id}
        onClick={this.handleClickOnSession}
        session={session}
      />
    );

    return sessions.length == 0 ? null : <ul>{sessionViews}</ul>;
  }

  private handleClickOnSession(event: any) {
    this.setState({ activeSessionId: event.target.value });
  }
}

export default HistoryView;
