import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Types from './types'
const Url = 'https://reqres.in/api'
export const login = (data) => {
    return async (dispatch) => {
        dispatch({ type: Types.LOGIN })
        const {
            userData,
            navigation
        } = data
        try {
            axios.post(`${Url}/login`, userData)
                .then(function (response) {
                    AsyncStorage.setItem('logindata', JSON.stringify(response.data))
                    dispatch({ type: Types.LOGIN_SUCCESS, payload: response.data })
                    navigation.navigate('dashboard')
                })
                .catch(function (error) {
                    dispatch({ type: Types.LOGIN_FAILED })
                    alert('InValid')
                });
        } catch (error) {
            dispatch({ type: Types.LOGIN_FAILED })
            alert('InValid')
        }
    }
};

export const user = (data) => {
    return async (dispatch) => {
        dispatch({ type: Types.USER_DETAILS })
        try {
            axios.get(`${Url}/users/${data}`)
                .then(function (response) {
                    dispatch({type:Types.USER_DETAILS_SUCCESS,payload:response.data.data})
                })
                .catch(function (error) {
                    dispatch({ type: Types.USER_DETAILS_FAILED })
                    alert('InValid')
                });
        } catch (error) {
            dispatch({ type: Types.USER_DETAILS_FAILED })
            alert('InValid')
        }
    }
};