import Cookies from "js-cookie";
import Router from "./router";

const cookieCheck = () => {
  const saveEmail = Cookies.get('email')
  if (saveEmail) {
    Router().navigate("/home")
  }
  // if (Cookies.get("token")) {
  //   console.log("you have a token");
  //   Router().navigate("/home");
  // } else {
  //   Router().navigate("/");
  // }
};
window.addEventListener('laod', cookieCheck)
export default cookieCheck