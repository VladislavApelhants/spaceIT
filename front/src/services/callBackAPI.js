import axios from "axios";

async function sendModalCall(endpoint, data) {
  const result = await axios.post(endpoint, data);
  return result;
}

export const callBackAPI = {
  sendModalCall,
};
