import Cookies from "js-cookie";
import axiosInstance from "./axiosInstance"

const addToDb = (id, color, num, size) => {
  // console.log(id, color, num, size)
  let userEmail = Cookies.get("email")
  if (color && num && size) {
    axiosInstance.get(`/users?emil=${userEmail}`).then(res => {
      let userId = res.data.id
      axiosInstance.get(`/products?id=${id}`).then(res => {
        let proObj = (res.data)[0];
        console.log(proObj)
        let orderObj = {
          "perPrice": proObj.price,
          "userId": userId,
          "shoeId": proObj.id,
          "title": proObj.title,
          "priceAll": (proObj.price * num),
          "brand": proObj.brand,
          "images": proObj.images,
          "choosenColor": color,
          "quantity": num,
          "chosenSize": size
        }

        axiosInstance.post('/ordersList', orderObj).then(res => {
          console.log(res.data)
        })
      })

    })

  } else {
    console.log('choose')
  }

}

export default addToDb