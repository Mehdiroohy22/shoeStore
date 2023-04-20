import apple from "@/components/payment/apple";
import google from "@/components/payment/google";
import mastercard from "@/components/payment/mastercard";
import paypal from "@/components/payment/paypal";
import wallet from "@/components/payment/wallet";
import paymentCart from "@/components/payment/paymentCart";
import El from "@/library/El";
import Router from "@/functions/router";

const paymentMethod = () => {
  return El({
    element: "div",
    className: "items-center bg-gray-50 h-screen",
    child: [
      El({
        element: "div",
        className: "px-6 pt-8 flex justify-between items-center mb-6",
        child: [
          El({
            element: "div",
            className: "flex items-center gap-3",
            child: [
              El({
                element: "button",
                onclick: () => {
                  Router().navigate("/checkout");
                },
                className: "flex",
                child: El({
                  element: "ion-icon",
                  name: "arrow-back",
                  className: "text-xl",
                }),
              }),
              El({
                element: "h1",
                child: "Payment Methods",
                className: "text-2xl font-medium",
              }),
            ],
          }),
          El({
            element: "button",
            className:
              "border border-solid border-black rounded-lg w-6 h-6 flex justify-center items-center",
            child: El({
              element: "ion-icon",
              name: "add-outline",
              className: "text-base",
            }),
          }),
        ],
      }),
      El({
        element: "p",
        child: "Select the payment method you want to use.",
        className: "mb-6 text-sm text-gray-600 px-7",
      }),
      paymentCart(wallet(), "My Wallet", "$9.379", true),
      paymentCart(paypal(), "Pay Pal", ""),
      paymentCart(google(), "Google", ""),
      paymentCart(apple(), "Apple Pay", ""),
      paymentCart(mastercard(), ".... .... .... .... 4679", ""),

      El({
        element: "div",
        className:
          "w-full fixed bottom-0 flex justify-center items-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl",
        child: El({
          element: "button",
          onclick: () => {
            Router().navigate("/paymentModal");
          },
          className:
            " bg-black text-white flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4",
          child: [
            El({
              element: "span",
              className: "self-center text-sm font-semibold",
              child: "Confirm Payment",
            }),
          ],
        }),
      }),
    ],
  });
};

export default paymentMethod;
