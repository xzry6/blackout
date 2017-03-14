import {observable} from 'mobx';


class Job {
  id: number;
  // TODO: (xzry6) change string to a real object
  @observable status: string;
  @observable result: string;

  constructor(id: number) {
    this.id = id;
    this.fetchStatusAndResult();
  }

  fetchStatusAndResult() {
    // TODO: (xzry6) make an http request and fetch job status and result here
    this.status = 'succeed';
    this.result = 'none';
  }

  // TODO: (xzry6) figure out how to update job status and result
}

export default Job;
