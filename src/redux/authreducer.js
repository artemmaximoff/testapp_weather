const SET_USER_DATA = 'SET_USER_DATA'


const initialState = {
    login: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setUserData = (login, password, isAuth) => ({ type: SET_USER_DATA, payload: { login, password, isAuth } })


export default authReducer