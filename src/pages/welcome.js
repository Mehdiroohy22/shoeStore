import El from "@/library/El";
import Router from "@/functions/router";

const welcome = () => {
  return El({
    element: "div",
    onclick: goToSlider,
    child: El({
      element: "img",
      src: "./public/assets/images/welcome-page.png",
      className: "w-full h-screen ",
    }),
  });
};

function goToSlider() {
  Router().navigate("/slider");
}

export default welcome;
