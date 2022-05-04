import axios from 'axios';

import { usersActions } from '../slices/user.slice';

const API_URL = 'http://localhost:4000/api/v1/users';

export const login = (accountNumber, password) => {
	return async dispatch => {
		try {
		const res=await axios.get(API_URL)
		console.log(res.data.accountNumber)
			dispatch(usersActions.login());
		} catch (error) {
			console.log(error);
		}
	};
};

export const signup = (name, email, password) => {
	return async dispatch => {
		try {
			const res=await axios.get(API_URL)
			console.log(res.data)
		} catch (error) {
			console.log(error);
		}
	};
};

export const logout = () => {
	return async dispatch => {
		try {
			dispatch(usersActions.logout());
		} catch (error) {
			console.log(error);
		}
	};
};
