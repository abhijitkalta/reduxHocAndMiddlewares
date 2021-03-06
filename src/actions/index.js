import { CHANGE_AUTH, FETCH_USERS } from './types';
import axios from 'axios';



export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
};

export function fetchUsers(){
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  }
};
