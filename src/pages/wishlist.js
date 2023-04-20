// import El from "@/library/El";
// import filterBrands from "@/components/home/filterBrands";

// const wishlist = () => {
//   const items = [
//     {
//       imgSrc: "public/assets/images/shoe.png",
//       title: "K-Swiss ista Train...",
//       price: "$ 85.00",
//     },
//     {
//       imgSrc: "public/assets/images/shoe2.png",
//       title: "K-Swiss ista Train...",
//       price: "$ 85.00",
//     },
//     {
//       imgSrc: "public/assets/images/shoe.png",
//       title: "K-Swiss ista Train...",
//       price: "$ 85.00",
//     },
//     {
//       imgSrc: "public/assets/images/shoe2.png",
//       title: "K-Swiss ista Train...",
//       price: "$ 85.00",
//     },
//     {
//       imgSrc: "public/assets/images/shoe.png",
//       title: "K-Swiss ista Train...",
//       price: "$ 85.00",
//     },
//     {
//       imgSrc: "public/assets/images/shoe2.png",
//       title: "K-Swiss ista Train...",
//       price: "$ 85.00",
//     },
//   ];
//   return El({
//     element: "div",
//     child: [
//       El({
//         element: "div",
//         className: "flex justify-between items-center p-6",
//         child: [
//           El({
//             element: "div",
//             className: "flex justify-center items-center gap-x-4",
//             child: [
//               El({
//                 element: "button",
//                 child: El({
//                   element: "ion-icon",
//                   name: "arrow-back",
//                   className: "text-2xl align-text-top",
//                 }),
//               }),
//               El({
//                 element: "h1",
//                 child: "My Wishlist",
//                 className: "text-2xl font-bold",
//               }),
//             ],
//           }),
//           El({
//             element: "div",
//             child: El({
//               element: "button",
//               child: El({
//                 element: "ion-icon",
//                 name: "search-outline",
//                 className: "text-3xl align-text-top",
//               }),
//             }),
//           }),
//         ],
//       }),
//       filterBrands(),
//       El({
//         element: "div",
//         className: "flex flex-wrap justify-around items-center pl-2",
//         child: items.map((item) => {
//           return El({
//             element: "div",
//             className: "mb-6",
//             child: [
//               El({
//                 element: "div",
//                 className:
//                   "w-40 h-40 bg-gray-100 rounded-3xl flex justify-center items-center mb-3 relative z-10",
//                 child: [
//                   El({
//                     element: "img",
//                     src: item.imgSrc,
//                   }),
//                   El({
//                     element: "div",
//                     className:
//                       "bg-black rounded-full z-20 flex p-1 absolute top-4 right-4",
//                     child: El({
//                       element: "ion-icon",
//                       name: "heart",
//                       className: "text-lg text-white",
//                     }),
//                   }),
//                 ],
//               }),
//               El({
//                 element: "p",
//                 child: item.title,
//                 className: "font-bold text-lg mb-1",
//               }),
//               El({
//                 element: "div",
//                 className: "flex items-center gap-x-2 mb-1",
//                 child: [
//                   El({
//                     element: "ion-icon",
//                     name: "star-half-outline",
//                     className: "text-base",
//                   }),
//                   El({
//                     element: "span",
//                     child: "4.6",
//                     className: "text-gray-400 text-base",
//                   }),
//                   El({
//                     element: "span",
//                     child: "|",
//                     className: "text-gray-400",
//                   }),
//                   El({
//                     element: "div",
//                     className: "bg-gray-100 py-0.5 px-2 rounded",
//                     child: El({
//                       element: "span",
//                       child: "6,641 sold",
//                       className: "text-sm",
//                     }),
//                   }),
//                 ],
//               }),
//               El({
//                 element: "span",
//                 child: item.price,
//                 className: "font-medium text-base",
//               }),
//             ],
//           });
//         }),
//       }),
//     ],
//   });
// };

// export default wishlist;
import El from "@/library/El";
import Router from "@/functions/router";
import filterBrands from "@/components/home/filterBrands";
import wishlistShoe from "@/components/cart/wishlistShoe";
import axiosInstance from "@/functions/axiosInstance";

const wishlist = (array) => {
  console.log(array)
  const container = El({
    element: "div",
  });
  array.forEach((element) => {
    axiosInstance.get(`/products/${element.id}`).then((res) => {
      container.append(wishlistShoe(res.data));
    });
  });
  return El({
    element: "div",
    child: [
      El({
        element: "div",
        className: "flex justify-between items-center p-6",
        child: [
          El({
            element: "div",
            className: "flex justify-center items-center gap-x-4",
            child: [
              El({
                element: "button",
                child: El({
                  element: "ion-icon",
                  name: "arrow-back",
                  className: "text-2xl align-text-top",
                  onclick: () => {
                    Router().navigate("/home");
                  },
                }),
              }),
              El({
                element: "h1",
                child: "My Wishlist",
                className: "text-2xl font-bold",
              }),
            ],
          }),
          El({
            element: "div",
            child: El({
              element: "button",
              child: El({
                element: "ion-icon",
                name: "search-outline",
                className: "text-3xl align-text-top",
              }),
            }),
          }),
        ],
      }),
      filterBrands(),
      container,
    ],
  });
};

export default wishlist;

