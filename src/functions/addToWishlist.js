import axiosInstance from "./axiosInstance"

const addToWishlist = (id) => {
  axiosInstance.post("/wishlist", {
    "id": id
  })
}

export default addToWishlist