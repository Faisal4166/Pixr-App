// BASE URL
import axios from 'axios';
export const baseURL = 'http://35.224.62.219/';

// Sign In Api
export const loginUser = async (EMAIL, PASSWORD) => {
  return await axios.post(
    baseURL + "login/",
    new URLSearchParams({
      email: EMAIL,
      password: PASSWORD,
    })
  );
};

// Forgot Password In Api
export const forgotPass = async (EMAIL) => {
  return await axios.post(
    baseURL + "forgot/",
    new URLSearchParams({
      email: EMAIL,
    })
  );
};

// Register in Api
export const register = async (
  FIRSTNAME,
  LASTNAME,
  FULLNAME,
  EMAIL,
  gender,
  DOB,
  PHONENUMBER,
  PASSWORD,
) => {
  return await axios.post(
    baseURL + "signup/",
    new URLSearchParams({
      first_name: FIRSTNAME,
      last_name: LASTNAME,
      full_name: FULLNAME,
      email: EMAIL,
      gender: gender,
      DOB: DOB,
      phone_number: PHONENUMBER,
      password: PASSWORD,
    })
  );
};


// Save Data In Api
export const saveData = async (files, user_id, person_name) => {
  return await axios.post(
    baseURL + "save_data_for_database/",
    new URLSearchParams({
      files: files,
      user_id: user_id,
      person_name: person_name,
    })
  );
};

// trainImage In Api
export const trainImage = async (user_id) => {
  return await axios.post(
    baseURL + "train/",
    new URLSearchParams({
      user_id: user_id
    })
  );
};


// trainData In Api
export const trainData = async (id, images) => {
  console.log(`EXPORTS id`, id);
  console.log(`EXPORTS images`, images);
  return await axios.post(
    baseURL + "test/",
    new URLSearchParams({
      user_id: id,
      image: images
    })
  );
};
