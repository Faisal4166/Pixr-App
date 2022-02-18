import {
  SIGNUPDATA,
  LOGINDATA,
} from "./constants";

export const LoginData = (data) => (dispatch) => {
  // console.log("action===============>", data);
  dispatch({
    type: LOGINDATA,
    payload: data,
  });
};

export const SignUpData = (data) => (dispatch) => {
  // console.log("action===============>", data);
  dispatch({
    type: SIGNUPDATA,
    payload: data,
  });
};

