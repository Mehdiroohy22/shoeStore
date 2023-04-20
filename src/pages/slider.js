import Router from "@/functions/router";
import El from "@/library/El";
import Swiper from "swiper/bundle";

const slides = [
  {
    text: "We provide high quality products just for you",
    src: "public/assets/images/welcome-1.png",
  },
  {
    text: "Your satisfaction is our number one priority",
    src: "public/assets/images/welcome-2.png",
  },
  {
    text: "Let’s fulfill your fashion needs with shoea right now!",
    src: "public/assets/images/welcome-3.png",
  },
];

const mySlides = (slide) => {
  return El({
    element: "div",
    className: "swiper-slide w-full flex flex-col",
    child: [
      El({
        element: "div",
        className: "w-full overflow-hidden",
        child: [
          El({
            element: "img",
            className: "w-full h-full",
            src: slide.src,
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full flex items-center justify-center",
        child: [
          El({
            element: "span",
            className:
              "w-full px-4 py-4 text-center text-black text-[28px] font-semibold mx-1",
            innerText: slide.text,
          }),
        ],
      }),
    ],
  });
};

const configSwiper = () => {
  new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    allowTouchMove: false,
  });
};

const slider = () => {
  setTimeout(configSwiper, 0);
  return El({
    element: "div",
    id: "first-slider",
    className:
      "w-full h-full pb-4 flex flex-col items-center justify-end tall:justify-between transition ease-linear duration-500 transform",
    child: [
      El({
        element: "div",
        className: "w-full swiper",
        child: [
          El({
            element: "div",
            className: "swiper-wrapper mb-10",
            child: [
              ...slides.map((item) => {
                return mySlides(item);
              }),
            ],
          }),
          El({
            element: "div",
            className: "swiper-pagination",
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full text-center mt-8 px-4",
        child: [
          El({
            element: "button",
            className: "w-full bg-black p-4 text-white rounded-full",
            child: "Next",
            eventListener: [
              {
                event: "click",
                callback: (e) => {
                  const swiper = document.querySelector(".swiper").swiper;
                  swiper.slideNext();
                  if (e.target.innerText === "Get Started") {
                    Router().navigate("/login");
                  }
                  swiper.activeIndex == 2
                    ? (e.target.innerText = "Get Started")
                    : null;
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
};

export default slider;
