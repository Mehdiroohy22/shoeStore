// import axiosInstance from "./axiosInstance";
import El from "@/library/El";
import Router from "./router";

const renderProducts = (proArr, brand = null) => {
  if (!brand) {

    let cartsArr = proArr.map((item) => {
      return El({
        element: "div",
        className: "mb-6",
        id: item.id,
        child: [
          El({
            element: "div",
            className:
              "w-40 h-40 bg-gray-100 flex justify-center items-center mb-3 roundedCart",
            onclick: (e) => {
              showShoeInfoPage(e.target.closest('div').parentElement.id)
              // console.log(e.target.closest('div').parentElement.id)
            },
            child: El({
              element: "img",
              className: "w-full h-full rounded-xl",
              src: item.images,
            }),
          }),
          El({
            element: "p",
            child: item.title,
            className: "font-bold text-lg mb-1",
          }),
          El({
            element: "span",
            child: `$${item.price}`,
            className: "font-medium text-base",
          }),
        ],
      });

    })


    return cartsArr
  } else {
    console.log('brand')
  }
}
function showShoeInfoPage(id) {
  Router().navigate(`/home/shoeInfo/${id}`)
}
export default renderProducts;