import * as React from 'react';
import {observer} from 'mobx-react';

import Job from 'models/Job';


interface JobProps {
  job: Job;
  isActive: boolean;
  onClick: (e: any) => void;
}

@observer
class JobView extends React.Component<JobProps, undefined> {

  render() {
    const job: Job = this.props.job;
    const jobStatus = <div>{job.status}</div>;

    return (
      <li onClick={this.props.onClick} value={job.id}>{job.id}
        {!this.props.isActive ? null : jobStatus}
      </li>
    );
  }
}

export default JobView;
