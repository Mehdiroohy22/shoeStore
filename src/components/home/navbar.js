import Router from "@/functions/router";
import El from "@/library/El";

const homeNavbar = () => {
  return El({
    element: "nav",
    className: "flex justify-between px-6 pt-4 pb-6",
    child: [
      El({
        element: "div",
        className: "flex gap-x-4",
        child: [
          El({
            element: "div",
            child: El({
              element: "img",
              src: "./public/assets/images/profile-photo.jpg",
              className: "rounded-full w-12 h-12",
            }),
          }),
          El({
            element: "div",
            className: "flex flex-col",
            child: [
              El({
                element: "span",
                child: "Good Morning 👋",
                className: "text-gray-500",
              }),
              El({
                element: "span",
                child: "Eli sharapova",
                className: "font-bold",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex items-center gap-x-2",
        child: [
          El({
            element: "ion-icon",
            name: "notifications-outline",
            className: "text-3xl",

          }),
          El({
            onclick: () => {
              Router().navigate('/wishlist')
            },
            element: "ion-icon",
            name: "heart-outline",
            className: "text-3xl",
          }),
        ],
      }),
    ],
  });
};

export default homeNavbar;
