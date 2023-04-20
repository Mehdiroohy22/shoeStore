import defaultSpan from "@/components/address/defaultSpan";
import radioButton from "@/components/address/radioButton";
import addressCart from "@/components/address/addressCart";
import El from "@/library/El";
import "flowbite";
import Router from "@/functions/router";

const shippingAddress = () => {
  return El({
    element: "div",
    className: "items-center bg-gray-50 h-screen",
    child: [
      El({
        element: "div",
        className: "flex justify-between px-7 py-8",
        child: [
          El({
            element: "div",
            className: "flex items-center gap-3",
            child: [
              El({
                element: "ion-icon",
                name: "arrow-back",
                className: "text-xl",
                onclick: () => {
                  Router().navigate("/checkout", {});
                },
              }),
              El({
                element: "h1",
                child: "Shipping Address",
                className: "text-2xl font-medium",
              }),
            ],
          }),
        ],
      }),
      addressCart("Home", defaultSpan(), radioButton(true)),
      addressCart("Office", "", radioButton("Office")),
      addressCart("Apartment", "", radioButton("Apartment")),
      addressCart("Parent's House", "", radioButton("Parent's House")),

      El({
        element: "button",
        className:
          " bg-gray-100 text-slate-600 flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4 mx-auto mt-8",
        child: [
          El({
            element: "span",
            className: "self-center text-sm font-semibold",
            child: "Add New Address",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "w-full fixed bottom-0 flex justify-center items-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl",
        child: El({
          element: "button",
          className:
            " bg-black text-white flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4",
          child: [
            El({
              element: "span",
              className: "self-center text-sm font-semibold",
              child: "Apply",
            }),
          ],
        }),
      }),
    ],
  });
};
export default shippingAddress;
