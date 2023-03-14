import axios from "axios"
import {toast} from "react-toastify"

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const registerUser = async(userData) => {
  try{
    const response  = await axios.post(
     `/api/user/register`,
      userData,
      {withCredentials  : true}
    );
    if(response.statusText === "OK"){
      toast.success("User Registered Successfully")
    }
    return response.data
  }catch(err){
     const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
     toast.error(message);
  }
}

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `/api/user/login`,
      userData
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const logoutUser = async () => {
  try {
    await axios.get(`/api/user/logout`);
  } catch (error) {
    const message =
      (error.responseponse && error.responseponse.data && error.responseponse.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
}
export const getUser = async () => {
  try {
    const response = await axios.get(`/api/user/getuser`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const  getLoginStatus = async() => {
  try{
    const responseponse = await axios.get(`/api/user/loggedin`)
    return responseponse.data;
  }catch(error){
   const message =  (error.responseponse && error.responseponse.data && error.responseponse.data.message) ||
    error.message ||
    error.toString();
  toast.error(message);
  }
}

export const forgotPassword = async(userData)=>{
  try{
     const response = await axios.post(
      `/api/user/forgotpassword`,
      userData
     );
     toast.success(response.data.message)
  }catch(error){
    const message =  (error.responseponse && error.responseponse.data && error.responseponse.data.message) ||
    error.message ||
    error.toString();
  toast.error(message);
  }
}

export const resetPassword = async(userData, resetToken) => {
  try{
    const response = await axios.put(
      `/api/user/resetpassword/${resetToken}`,
      userData
    )
    return response.data
  }
  catch(error){
    const message =  (error.responseponse && error.responseponse.data && error.responseponse.data.message) ||
    error.message ||
    error.toString();
  toast.error(message);   
  }
}
export const updateUser = async (formData) => {
  try {
    const response = await axios.patch(
      `/api/user/updateuser`,
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
export const changePassword = async (formData) => {
  try {
    const response = await axios.patch(
      `/api/user/changepassword`,
      formData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};