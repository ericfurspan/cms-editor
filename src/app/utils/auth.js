import { createContext } from 'react';

const Context = createContext({});
export { Context };

export class Auth {
  token;

  loading;

  constructor({ history }) {
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.setAuth = this.setAuth.bind(this);
    this.clearAuth = this.clearAuth.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.redirect = history.push.bind(this);
  }

  isAuthenticated() {
    return this.token && localStorage.getItem('isLoggedIn');
  }

  setAuth({ jwt, user }) {
    this.token = jwt;
    this.user = user;
    localStorage.setItem('isLoggedIn', 'true');
    this.redirect('/');
  }

  clearAuth() {
    this.token = null;
    this.loading = false;
    localStorage.removeItem('isLoggedIn');
  }

  setLoading(loading) {
    this.loading = loading;
  }
}
