import axios from "axios";

export const endpoints = {
  callbackCourse: "http://localhost:1337/api/callback-courses",
  callback: "http://localhost:1337/api/callbacks",
  getAllCourses: "http://localhost:1337/api/courses",
};

async function sendModalCall(endpoint, data) {
  const result = await axios.post(endpoint, data);
  return result;
}

async function getAllCourses() {
  const result = await axios.get(endpoints.getAllCourses);
  return result;
}

export const serverAPI = {
  sendModalCall,
  getAllCourses,
};
