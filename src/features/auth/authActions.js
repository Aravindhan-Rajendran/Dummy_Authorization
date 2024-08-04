export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const login = (username, password) => async dispatch => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: 'An error occurred' });
  }
};

export const fetchUser = (id) => async dispatch => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    
    if (response.ok) {
      dispatch({ type: FETCH_USER_SUCCESS, payload: data });
    } else {
      dispatch({ type: FETCH_USER_FAILURE, payload: 'Failed to fetch user' });
    }
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: 'An error occurred' });
  }
};