import {observable} from 'mobx';

import Job from './Job';


class Session {
  id: number;
  @observable jobs: Job[];

  constructor(id: number) {
    this.id = id;
    this.fetchJobs();
  }

  fetchJobs() {
    // TODO: (xzry6) make an http request and fetch jobs here
    this.jobs = [
      new Job(3),
      new Job(4)
    ];
  }

  // TODO: (xzry6) figure out how to update jobs
}

export default Session;
