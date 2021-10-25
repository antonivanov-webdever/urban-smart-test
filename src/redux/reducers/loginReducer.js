const SET_USER_LOGIN = 'SET_USER_LOGIN';

const initialState = {
    login: '',
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_LOGIN:
            return {...state, login: action.payload }

        default:
            return state;

    }
}

export const setUserLogin = (userLogin) => ({type: SET_USER_LOGIN, payload: userLogin})
