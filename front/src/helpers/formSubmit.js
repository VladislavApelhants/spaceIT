import { callBackAPI } from "@/services/callBackAPI";

export function formSubmit(endpoint) {
  return function (e) {
    e.preventDefault();

    const data = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      data[key] = value;
    });

    console.log("set endpoint for request ", data);
    //const result = await callBackAPI.sendModalCall(endpoint, data);
  };
}
