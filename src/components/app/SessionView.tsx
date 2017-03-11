import * as React from 'react';
import {observer} from 'mobx-react';

import Job from '../../models/Job';
import JobView from './JobView';
import Session from '../../models/Session';


interface SessionProps {
  session: Session,
  isActive: boolean
}

@observer
class SessionView extends React.Component<SessionProps, undefined> {

    render() {
      const session: Session = this.props.session;
      // TODO: (xzry6) add isActive logic here
      let jobViews: JSX.Element[] = session.jobs.map((job: Job) =>
        <JobView key={job.id} job={job} />)

      return (
        <li>{session.id}
          <ul>{jobViews}</ul>
        </li>
      );
    }
}

export default SessionView;
