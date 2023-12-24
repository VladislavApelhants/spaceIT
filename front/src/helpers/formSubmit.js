import { callBackAPI } from "@/services/callBackAPI";

const { BASE_URL } = process.env;

export function formSubmit(endpoint) {
  return async function (e) {
    e.preventDefault();

    const formData = { data: {} };
    new FormData(e.currentTarget).forEach((value, key) => {
      formData.data[key] = value;
    });
    const result = await callBackAPI.sendModalCall(endpoint, formData);
    console.log(result);
  };
}
