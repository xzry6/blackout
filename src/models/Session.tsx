import {observable} from 'mobx';

class Session {
  @observable id: number;

  constructor(id: number) {
    this.id = id;
  }
}

export default Session;
