import mobx, { observable, action, computed } from 'mobx'

class Store {
  @observable number = 0;
  @observable loggedIn = false;
  
  @action incrementNumber() {
    this.number++;
  }
}

const store = new Store();

export default store;