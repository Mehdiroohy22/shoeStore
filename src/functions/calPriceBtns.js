import shoeCart from "@/components/cart/shoeCart"
import cart from "@/pages/cart"
import axiosInstance from "./axiosInstance"
import calculateAllCost from "./calculateAllCost"

const calcPriceBtns = (count, id) => {
  axiosInstance.get(`/ordersList/${id}`).then(res => {
    let perPrice = res.data.perPrice;
    let root = document.getElementById('root')
    if (count > 0) {
      axiosInstance.patch(`/ordersList/${id}`, { "quantity": count, "priceAll": perPrice * count }).then(res => {
        console.log(res.data)
        root.innerHTML = ''
        // cart()
        axiosInstance.get('/ordersList').then(res => {
          let carts = shoeCart(res.data)
          // console.log('cart')
          // console.log(carts)
          root.append(cart(carts))
          calculateAllCost()
        })
      })
    } else {
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
  })
}

export default calcPriceBtns