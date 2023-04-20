import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import slider from "@/pages/slider";
import login from "@/pages/login";
import home from "@/pages/home";
// import shoeInfo from "@/pages/shoeInfo";
import filterdDynamicHome from "@/components/home/filterdDynamicHome";
import axiosInstance from "./axiosInstance";
import renderProducts from "./renderProducts";

import shoeInfo from "@/pages/shoeInfo";
import cart from "@/pages/cart";
// import counter from "@/components/cart/counter";
// import removeItem from "@/components/cart/removeItem";
import shoeCart from "@/components/cart/shoeCart";
import search from "@/pages/search";
import PageNotFound from "@/pages/notFoundPage";
import myOrders from "@/pages/myOrders";
import wishlist from "@/pages/wishlist";
import checkout from "@/pages/checkout";
import shippingAddress from "@/pages/shippingAddress";
import shippingType from "@/pages/shippingType";
import paymentMethod from "@/pages/paymentMethod";
import paymentModal from "@/components/payment/paymentModal";
import calculateAllCost from "./calculateAllCost";
import checkoutCart from "@/components/cart/checkoutCart";
import addressCart from "@/components/address/addressCart";
import editButton from "@/components/address/editButton";
import infinit from "./infinite";
import myOrderCompleter from "@/components/cart/myorderCompleter";
// import wishlistShoe from "@/components/cart/wishlistShoe";
const route = new Navigo("/");
const Router = () => {
  const root = document.getElementById("root");

  route
    .on("/", () => {
      root.append(starter());
      setTimeout(() => {
        Router().navigate('/welcome')
      }, 2000)
    })
    .on("/welcome", () => {
      root.innerHTML = "";
      root.append(welcome());
    })
    .on("/slider", () => {
      root.innerHTML = "";
      root.append(slider());
    })
    .on("/login", () => {
      root.innerHTML = "";
      root.append(login());
    })
    .on("/home", () => {
      root.innerHTML = "";
      root.append(home());
      infinit()
    }).on("/home/:brand", ({ data }) => {
      // console.log(data)
      root.innerHTML = ''
      root.append(filterdDynamicHome(data.brand))
      axiosInstance.get(`/products?brand=${data.brand}`).then(res => {
        let carts = renderProducts(res.data)
        carts.forEach((cart) => {
          document.getElementById('cartDynamicHomeContainer').append(cart)

        })
      })
    }).on('/home/search/pageNotFound', () => {
      let resultContainer = document.getElementById('showResult')
      resultContainer.innerHTML = ''
      resultContainer.append(PageNotFound())
      // root.append(search());
    }).on("/home/search/:searchValue", ({ data }) => {
      // console.log(data)
      // root.innerHTML = ''
      // root.append(filterdDynamicHome())
      axiosInstance.get(`/products?brand=${data.searchValue}`).then(res => {
        let carts = renderProducts(res.data)
        let showResult = document.getElementById('showResult')
        showResult.innerHTML = '';
        showResult.append(...carts)
      })
    }).on("/home/shoeInfo/:id", ({ data }) => {
      root.innerHTML = '',
        // console.log(data.id)
        axiosInstance.get(`/products?id=${data.id}`).then(res => {
          let element = shoeInfo(res.data)
          // console.log(element)
          root.append(element)
        })
    }).on("/myCart", () => {
      root.innerHTML = ''
      // cart()
      axiosInstance.get('/ordersList').then(res => {
        let carts = shoeCart(res.data)
        console.log('cart')
        // console.log(carts)
        root.append(cart(carts))
        calculateAllCost()
      })
    }).on("/search", () => {
      root.innerHTML = "";
      root.append(search());
    }).on("/myOrders", () => {
      root.innerHTML = "";
      root.append(myOrders());
      axiosInstance.get(`/ordersList`).then((res) => {
        document.getElementById('activeOrders').append(...myOrderCompleter(res.data))
        // console.log(activeContainer)
        // res.data.forEach((element) => {
        //   // console.log(elementObj)
        //   activeContainer.append(shoeCart(element))
        //   // if (element.isActive) {
        //   //   activeContainer.append(shoeCart(element));
        //   // } else {
        //   //   completedContainer.append(shoeCart(element));
        //   // }
        // });
      });
    }).on("/wishlist", () => {
      root.innerHTML = '';
      // console.log('al')
      axiosInstance.get('/wishlist').then(res => {

        root.append(wishlist(res.data))
      })
    }).on("/checkout", () => {
      root.innerHTML = "";
      if (window.location.pathname.includes('/shippingAddress')) {
        root.append(checkout(addressCart("Office", "", editButton())));
        axiosInstance.get('/ordersList').then(res => {
          let container = document.getElementById('checkoutOrdersContainer')
          container.append(...checkoutCart(res.data))
          calculateAllCost('totalCheckout')
        })
      } else {
        root.append(checkout(addressCart("Home", "", editButton())));

        axiosInstance.get('/ordersList').then(res => {
          let container = document.getElementById('checkoutOrdersContainer')
          container.append(...checkoutCart(res.data))
          calculateAllCost('totalCheckout')
        })
      }


    })
    .on("/shippingAddress", () => {
      root.innerHTML = "";
      root.append(shippingAddress());
    })
    .on("/shippingType", () => {
      root.innerHTML = "";
      root.append(shippingType());
    })
    .on("/paymentMethod", () => {
      root.innerHTML = "";
      root.append(paymentMethod());
    })
    .on("/paymentModal", () => {
      root.innerHTML = "";
      root.append(paymentModal());
    })
  route.resolve();
  return route;
};

export default Router;
