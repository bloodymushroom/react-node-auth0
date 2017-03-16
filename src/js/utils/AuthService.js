import decode from 'jwt-decode';
import Auth0Lock from 'auth0-lock';
import secrets from './secrets.json'

import store from '../mobx/Store'

const ID_TOKEN_KEY = 'id_token';

const lock = new Auth0Lock(secrets.CLIENT_ID, secrets.DOMAIN, {
    auth: {
      redirectUrl: `${window.location.origin}`,
      responseType: 'token'
    }
  }
);

lock.on('authenticated', authResult => {
  setIdToken(authResult.idToken);
  store.loggedIn = true;
});

export function login(options) {
  lock.show(options);

  return {
    hide() {
      lock.hide();
    }
  }
}

export function logout() {
  clearIdToken();
  store.loggedIn = false;
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  store.isLoggedIn = !!idToken && !isTokenExpired(idToken);
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}