import axios from "axios";

const API = axios.create({

  baseURL: "http://localhost:5000/api/auth"

});


// register API
export const registerAPI = async (userData) => {

  const response = await API.post(
    "/register",
    userData
  );

  return response.data;
};


// login API
export const loginAPI = async (userData) => {

  const response = await API.post(
    "/login",
    userData
  );

  return response.data;
};