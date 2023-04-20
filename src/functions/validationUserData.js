import axiosInstance from "./axiosInstance";
import Router from "./router";
import starter from "@/pages/starter";

const validationUserData = (email, pass) => {
  axiosInstance("/users").then((res) => {
    const data = res.data[0];
    if (data.email === email && data.password === pass) {
      const root = document.getElementById("root");
      root.innerHTML = "";
      root.append(starter());

      setTimeout(() => {
        // const starter = document.getElementById("starter");
        // starter.classList.add("-translate-x-full");
        Router().navigate("/home");
      }, 2000);
    } else {
      const errorMassage = document.getElementById("inputError");
      errorMassage.classList.remove("hidden");
      const passwordInput = document.getElementById("password");
      const checkFocus = setInterval(() => {
        const isFocus = passwordInput === document.activeElement;
        if (isFocus === true) {
          errorMassage.classList.add("hidden");
          clearInterval(checkFocus);
        }
      }, 200);
    }
  });
};

export default validationUserData;
