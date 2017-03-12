import * as React from 'react';
import {observer} from 'mobx-react';

import Job from '../../models/Job';
import JobView from './JobView';
import Session from '../../models/Session';


interface SessionProps {
  session: Session,
  isActive: boolean,
  onClick: (e: any) => void
}

@observer
class SessionView extends React.Component<SessionProps, undefined> {

  render() {
    const session: Session = this.props.session;
    const jobViews: JSX.Element[] = session.jobs.map(
      (job: Job) => <JobView key={job.id} job={job} />
    )

    // show only one active jobviews
    return (
      <li onClick={this.props.onClick} value={session.id}>{session.id}
        {!this.props.isActive ? null : <ul>{jobViews}</ul>}
      </li>
    );
  }
}

export default SessionView;
