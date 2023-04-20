import axiosInstance from "@/functions/axiosInstance";
import calculateAllCost from "@/functions/calculateAllCost";
// import Router from "@/functions/router";
import El from "@/library/El";
import cart from "@/pages/cart";
import shoeCart from "./shoeCart";
// import cart from "@/pages/cart";

const removeItem = (orderId) => {
  return El({
    element: "button",
    className: "flex items-center",
    onclick: () => {
      removeOrderFromDb(orderId)
    },
    child: El({
      element: "ion-icon",
      name: "trash-outline",
    }),
  });
};


function removeOrderFromDb(id) {
  console.log(id)
  let root = document.getElementById('root')
  axiosInstance.delete(`/ordersList/${id}`).then(res => {
    console.log(res.data)
    root.innerHTML = ''
    // cart()
    axiosInstance.get('/ordersList').then(res => {
      let carts = shoeCart(res.data)
      console.log('cart')
      // console.log(carts)
      root.append(cart(carts))
      calculateAllCost()
    })
  })
}
export default removeItem;
