import {
  LOGINDATA,
  SIGNUPDATA
} from "./constants";

const initialState = {
  loginData: [],
  signUpData: [],
};
// console.log("reducer 1===============>", initialState);
function userReducer(state = initialState, action) {
  // console.log("reducer 2===============>", state)
  switch (action.type) {
    case LOGINDATA:
      // console.log("reducer 2===============>", state);
      return { ...state, loginData: action.payload };
    case SIGNUPDATA:
      // console.log("reducer 2===============>", state);
      return { ...state, signUpData: action.payload };
    default:
      return state;
  }
}

export default userReducer;
