//import axios from 'axios';
import {
  FETCH_USER,
  FETCH_CURRENT_USER,
  FETCH_ADMIN
} from '../../helpers/contents';
export const fetchUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USER,
    payload: res
  });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const fetchAdmin = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');
  dispatch({
    type: FETCH_ADMIN,
    payload: res
  });
};
