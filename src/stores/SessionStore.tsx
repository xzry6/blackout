import {observable} from 'mobx';

import Session from '../models/Session';


class SessionStore {
  @observable sessions: Session[];

  constructor(passedSessions: Session[]) {
    this.sessions = passedSessions;
  }
}

export default SessionStore;
