import { serverAPI } from "@/services/serverAPI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function formSubmit(endpoint, toggleModal) {
  return async function (e) {
    e.preventDefault();

    const formData = { data: {} };
    new FormData(e.currentTarget).forEach((value, key) => {
      formData.data[key] = value;
    });

    try {
      await serverAPI.sendModalCall(endpoint, formData);
      toast.success(
        "Ваш запит прийнято. Менеджер зв'яжеться з вами як найшвидше.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      toggleModal();
      e.target.reset();
    } catch {
      toast.error("Вибачьте за помилку🥲 Спробуйте, будь ласка, пізніше", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
}
