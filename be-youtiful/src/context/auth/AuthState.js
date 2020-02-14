import React, { useReducer } from "react";
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken'
import {
    
REGISTER_SUCCESS,
REGISTER_FAIL,
CLIENT_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT,
CLEAR_ERRORS
} from '../types'
 
const AuthState = props =>{
    const initialState ={
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        client: null,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);


// Load client
const loadClient = async() => {
	const auth = localStorage.token
	const config = {
        headers: {
            'Content-Type': 'application/json',
	    'x-auth-token': `${auth}`
        }
      
    }

    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth', config);
        dispatch({
            type: CLIENT_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type:AUTH_ERROR
        })
    }

    
}



// Register Client
const register = async formData =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
        
    }

    try {
        const res = await axios.post('/api/clients',formData ,config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        loadClient()
    } catch (err) {
             dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
            
        }) 
        //console.log(err.response.data.msg)
    }
}


// Login Client
const login = async(formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
        
    }

    try {
        const res = await axios.post('/api/auth',formData ,config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        loadClient()
    } catch (err) {
             dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
            
        })
        
    }
}

//Logout
const logout = () => {
    dispatch({
        type:LOGOUT
    })
}

// Clear errors
const clearErrors = () => {
    dispatch({
        type:CLEAR_ERRORS
    });
}



    
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                client: state.client,
                laoding: state.loading,
                error: state.error,
                register,
                loadClient,
                login,
                logout,
                clearErrors

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )


}


export default AuthState;
