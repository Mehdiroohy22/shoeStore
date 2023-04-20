import axiosInstance from "@/functions/axiosInstance"
import renderProducts from "@/functions/renderProducts"
import Router from "@/functions/router"

const showSearchPage = (text) => {
  // console.log(text)

  axiosInstance.get(`/products?brand=${text}`).then(res => {
    let carts = renderProducts(res.data)
    if (carts.length) {
      Router().navigate(`/home/search/${text}`)
    } else {
      Router().navigate('/home/search/pageNotFound')
    }
    // carts.forEach((cart) => {
    //   document.getElementById('cartDynamicHomeContainer').append(cart)

    // })
  })
}

export default showSearchPage;

