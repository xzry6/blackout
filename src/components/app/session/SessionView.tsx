import * as React from 'react';
import {observer} from 'mobx-react';

import Job from 'models/Job';
import JobView from './job/JobView';
import Session from 'models/Session';


interface SessionProps {
  isActive: boolean;
  onClick: (e: any) => void;
  session: Session;
}
interface SessionState { activeJobId?: number; }

@observer
class SessionView extends React.Component<SessionProps, SessionState> {

  constructor() {
    super();
    this.state = { activeJobId: undefined };
    // NOTE: this binding is necessary to make `this` work in the callback.
    this.handleClickOnJob = this.handleClickOnJob.bind(this);
  }

  render() {
    const session: Session = this.props.session;
    const jobViews: JSX.Element[] = session.jobs.map((job: Job) =>
      <JobView
        isActive = {
          this.state.activeJobId &&
          this.state.activeJobId == job.id
        }
        job={job}
        key={job.id}
        onClick={this.handleClickOnJob}
      />
    )

    // show only one active jobviews
    return (
      <li onClick={this.props.onClick} value={session.id}>{session.id}
        {!this.props.isActive ? null : <ul>{jobViews}</ul>}
      </li>
    );
  }

  private handleClickOnJob(event: any) {
    // Note: stop propagation in nested 'onClick' events
    event.stopPropagation();
    this.setState({ activeJobId: event.target.value });
  }
}

export default SessionView;
