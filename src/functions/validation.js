import Cookies from "js-cookie";

const validation = (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");

  let status = true;
  if (rememberMe.checked) {
    Cookies.set("email", email.value, { expires: 2 });
    Cookies.set("password", password.value, { expires: 2 });
  } else {
    Cookies.remove("password");
    Cookies.remove("email");
  }
  return status;
};
// window.onload = function () {
//   const email = Cookies.get("email");
//   const password = Cookies.get("password");
//   if (email !== undefined && password !== undefined) {
//     document.getElementById("email").value = email;
//     document.getElementById("password").value = password;
//     document.getElementById("rememberMe").checked = true;
//   }
// };

export default validation;
