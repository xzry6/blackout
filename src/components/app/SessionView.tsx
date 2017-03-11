import * as React from 'react';
import {observer} from 'mobx-react';

import Session from '../../models/Session';


@observer
class SessionView extends React.Component<{session: Session}, undefined> {
  render() {
    return <li>{this.props.session.id}</li>;
  }
}

export default SessionView;
