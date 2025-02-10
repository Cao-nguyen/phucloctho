import { LOGIN_USER } from '../Actions/userAction';

const INITIAL_STATE = {
    account: {
        fullName: '',
        tokenUser: '',
        role: '',
        id: ''
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                account: {
                    fullName: action?.payload?.DT?.fullName,
                    tokenUser: action?.payload?.DT?.tokenUser,
                    role: action?.payload?.DT?.role,
                    id: action?.payload?.DT?.id
                }
            };

        case "LOGOUT_USER":
            return {
                ...state,
                account: {
                    fullName: "",
                    tokenUser: "",
                    role: ""
                },
            };

        default:
            return state;
    }
};

export default userReducer;
