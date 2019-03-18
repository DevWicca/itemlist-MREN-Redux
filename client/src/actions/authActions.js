import axios from "axios"
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
 } from './types'
import { returnErrors } from "./errorActions";


 // CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // user loading 
    dispatch({type: USER_LOADING})
    

    axios.get('/api/auth/user', tokenConfig(getState))
         .then(res => dispatch({
             type: USER_LOADED,
             payload: res.date
         }))
         .catch(err => {
             dispatch(returnErrors(err.response.data, err.response.status))
             dispatch({ 
                 type: AUTH_ERROR
            })
         })
}

// Setup  config/headers and token
export const tokenConfig = getState => {
    // get token from local storage
    const token = getState().auth.token
    // Headers 
    const config = {
        Headers: {
            "Content-type": "application/json"
        }
    }
    // if token , add to headers
    if (token) config.Headers['x-auth-token'] = token
    
    return config
}
 