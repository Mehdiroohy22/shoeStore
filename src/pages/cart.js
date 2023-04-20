// import removeItem from "@/components/cart/removeItem";
// import shoeCart from "@/components/cart/shoeCart";
// import counter from "@/components/cart/counter";
import footer from "@/components/home/footer";
import Router from "@/functions/router";
// import calculateAllCost from "@/functions/calculateAllCost";
import El from "@/library/El";

const cart = (cartList) => {
  // console.log(orderList)
  // orderList.map((order) => {
  // })
  // console.log(calculateAllCost())
  // console.log(typeof cartList)
  return El({
    element: "div",
    className: "bg-gray-100 w-full h-screen",
    child: [
      El({
        element: "div",
        className: "flex justify-between items-center p-6",
        child: [
          El({
            element: "div",
            className: "flex justify-between items-center w-full",
            child: [
              El({
                element: "div",
                className: "flex justify-center items-center gap-x-5",
                child: [
                  El({
                    element: "img",
                    src: "/assets/images/logo.png",
                    className: "w-4 h-4",
                  }),
                  El({
                    element: "h1",
                    child: "My Cart",
                    className: "text-2xl font-semibold",
                  }),
                ],
              }),
              El({
                element: "div",

                child: El({
                  element: "button",
                  className: "flex",
                  child: El({
                    element: "ion-icon",
                    name: "search-outline",
                    className: "text-3xl align-text-top",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        id: "cartsContainer",
        child: [...cartList]
      }),

      El({
        element: "div",
        className:
          "fixed bottom-16 w-full flex justify-center items-center pl-4 py-4 bg-white rounded-tl-2xl rounded-tr-2xl",
        child: [
          El({
            element: "div",
            className: "flex flex-col gap-y-1",
            child: [
              El({
                element: "span",
                child: "Total price",
                className: "font-light text-xs text-slate-400",
              }),
              El({
                element: "span",
                id: 'allCost',
                child: '$',
                className: "font-bold text-lg",
              }),
            ],
          }),
          El({
            element: "div",
            className: "w-full flex justify-center items-center",
            child: El({
              onclick: () => {
                Router().navigate('/checkout')
              },
              element: "button",
              className:
                "bg-black w-4/5 py-3 text-white flex justify-center items-center rounded-full gap-x-4 shadow-2xl shadow-gray-400",
              child: [
                "Checkout",
                El({
                  element: "ion-icon",
                  name: "arrow-forward-circle",
                  className: "text-xs",
                }),
              ],
            }),
          }),
        ],
      }),
      El({
        element: "div",
        child: footer(),
        // className: "bg-white bottom-0 fixed mb-0 w-full h-24 font-light",
      }),
    ],
  });
};

export default cart;
