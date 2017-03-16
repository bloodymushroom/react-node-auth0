import mobx, { observable, action, computed } from 'mobx'
import { getIdToken } from '../utils/AuthService'


const server = 'http://localhost:3003/'

class Store {
  @observable number = 0;
  @observable loggedIn = false;
  @observable publicData = null;
  @observable privateData = null;
  
  @action incrementNumber() {
    this.number++;
  }

  @action getPublicData() {
    const token = getIdToken()
    fetch( server + 'data', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      }
    })
    .then( (res) => res.json() )
    .then( (res) => this.publicData = res.toString())
    .catch( (err) => this.publicData = err.toString())
  }

  @action getPrivateData() {
    const token = getIdToken()
    fetch( server + 'api/data', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('id_token')
      }
    })
    .then( (res) => res.json() )
    .then( (res) => this.privateData = res.toString())
    .catch( (err) => this.privateData = err.toString())
  }
}

const store = new Store();

export default store;