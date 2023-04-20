import App from "./src/App.js";
import Router from "./src/functions/router";
import "swiper/css/bundle";
import "./src/styles/style.css";
// import cookieCheck from "./src/functions/checkCooki"

const rootApp = document.getElementById("app");

rootApp.appendChild(App());
Router()
// cookieCheck()
// Router().navigate("/");
// setTimeout(() => {
//   Router().navigate("/welcome");
// }, 2000);
