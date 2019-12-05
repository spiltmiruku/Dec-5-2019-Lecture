const initialState = {
    user: {}
}

const LOGIN_USER = 'LOGIN_USER';

export function loginUser(userObj){
    return {
        type: LOGIN_USER,
        payload: userObj
    }
}