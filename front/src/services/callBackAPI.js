import axios from "axios";

export const endpoints = {
  callbackCourse: "http://localhost:1337/api/callback-courses",
  callback: "http://localhost:1337/api/callbacks",
};

async function sendModalCall(endpoint, data) {
  const result = await axios.post(endpoint, data);
  return result;
}

export const callBackAPI = {
  sendModalCall,
};
