import El from "@/library/El";
// import shoeCart from "@/components/cart/shoeCart";
import addressCart from "@/components/address/addressCart";
import editButton from "@/components/address/editButton";
import Router from "@/functions/router";
import promoCode from "@/functions/promoCode";
// // import axiosInstance from "@/functions/axiosInstance";
// import removeItem from "@/components/cart/removeItem";
// import counter from "@/components/cart/counter";

const checkout = (address = "Home") => {
  const container = El({
    element: "div",
    id: 'checkoutOrdersContainer'
  });

  const totalPrice = El({
    element: "span",
    className: "text-gray-700 text-lg",
  });
  // axiosInstance.get(`/orders?userId=${1}`).then((res) => {
  //   let total = 0;
  //   res.data.forEach((element) => {
  //     if (element.isActive) {
  //       total += element.quantity * element.price;
  //       container.append(
  //         shoeCart(
  //           element,
  //           removeItem(),
  //           counter({
  //             totalPriceId: "totalPriceCart",
  //             price: 245,
  //             firstNumber: element.quantity,
  //           })
  //         )
  //       );
  //     } 
  //   });
  //   totalPrice.append(total.toLocaleString());
  // });
  return El({
    element: "div",
    className: "items-center bg-gray-50",
    child: [
      El({
        element: "div",
        className: "p-4 flex items-center justify-between pt-8 px-6",
        child: [
          El({
            element: "div",
            className: "flex items-center gap-3",
            child: [
              El({
                element: "button",
                className: "flex",
                onclick: () => {
                  Router().navigate("/home");
                },
                child: El({
                  element: "ion-icon",
                  name: "arrow-back-outline",
                  className: "text-2xl",
                }),
              }),
              El({
                element: "h1",
                child: "Checkout",
                className: "text-2xl font-bold",
              }),
            ],
          }),
          El({
            element: "ion-icon",
            name: "ellipsis-horizontal-circle",
            className: "text-2xl",
          }),
        ],
      }),
      El({
        element: "h2",
        child: "Shipping Address",
        className: "text-xl font-bold text-left p-6",
      }),
      El({
        element: 'div',
        child: address || addressCart("Home", "", editButton()),
      }),
      El({
        element: "hr",
        className: "text-gray-500 mx-4",
      }),
      El({
        element: "h2",
        child: "Order List",
        className: "text-xl font-bold text-left p-6",
      }),
      El({
        element: "div",
        child: container,
        className: "mb-4",
      }),
      El({
        element: "hr",
        className: "text-gray-500 mx-4",
      }),
      El({
        element: "h2",
        child: "Choose Shipping",
        className: "text-xl font-bold text-left p-6",
      }),
      El({
        element: "button",
        className: "w-full",
        child: El({
          element: "div",
          onclick: () => {
            Router().navigate("/shippingType");
          },
          className:
            "flex items-center justify-between text-left p-4 rounded-2xl mx-4 bg-white",
          child: [
            El({
              element: "div",
              className: "flex items-center gap-3",
              child: [
                El({
                  element: "ion-icon",
                  name: "car",
                  className: "text-3xl",
                }),
                El({
                  element: "p",
                  child: "Choose Shipping Type",
                  className: "font-bold",
                }),
              ],
            }),
            El({
              element: "ion-icon",
              name: "chevron-forward",
              className: "text-2xl",
            }),
          ],
        }),
      }),
      El({
        element: "h2",
        child: "Promo Code",
        className: "text-xl font-bold text-left p-6",
      }),
      El({
        element: "div",
        className: "flex justify-between items-center gap-2 mx-4 mb-8",
        child: [
          El({
            element: "input",
            placeholder: "Enter Promo Code",
            id: 'promoCode',
            className:
              "bg-gray-100 text-slate-500 font-light py-4 pl-4 rounded-2xl outline-none w-full",
          }),
          El({
            element: "button",
            className: "flex",
            child: El({
              element: "ion-icon",
              name: "add-circle",
              className: "text-5xl",
              onclick: () => {
                promoCode()
              }
            }),
          }),
        ],
      }),
      El({
        element: "div",
        className: "rounded-2xl mb-10 bg-white mx-4",
        child: [
          El({
            element: "div",
            className: "flex justify-between p-4",
            child: [
              El({
                element: "p",
                child: "Amount",
                className: "text-gray-600 text-lg",
              }),
              totalPrice,
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between p-4",
            child: [
              El({
                element: "p",
                child: "Shipping",
                className: "text-gray-600 text-lg font-normal",
              }),
              El({
                element: "span",
                child: "-",
                className: "text-gray-700 font-bold text-lg",
              }),
            ],
          }),
          El({
            element: "hr",
            className: "text-gray-500 mx-4",
          }),
          El({
            element: "div",
            className: "flex justify-between p-4",
            child: [
              El({
                element: "p",
                child: "Total",
                className: "text-gray-600 text-lg font-normal",
              }),
              El({
                element: "span",
                child: "$",
                id: 'totalCheckout',
                className: "text-gray-700 font-bold text-lg",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "w-full flex justify-center items-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl",
        child: El({
          element: "button",
          onclick: () => {
            Router().navigate("/paymentMethod");
          },
          className:
            " bg-black text-white flex justify-center items-center gap-x-4 rounded-full w-11/12 py-4",
          child: [
            El({
              element: "span",
              className: "self-center text-sm font-semibold",
              child: "Continue to Payment",
            }),
            El({
              element: "ion-icon",
              name: "arrow-forward",
              className: "text-lg font-bold",
            }),
          ],
        }),
      }),
    ],
  });
};
export default checkout;