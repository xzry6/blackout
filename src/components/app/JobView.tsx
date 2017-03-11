import * as React from 'react';
import {observer} from 'mobx-react';

import Job from '../../models/Job';


@observer
class JobView extends React.Component<{job: Job}, undefined> {
  render() {
    const job: Job = this.props.job;

    return (
      <li>
        <div>{job.id}</div>
        <div>{job.status}</div>
        <div>{job.result}</div>
      </li>
    );
  }
}

export default JobView;
