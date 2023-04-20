import axiosInstance from "./axiosInstance"

const removeFromWishlist = (id) => {
  axiosInstance.delete(`/wishlist/${id}`)
}

export default removeFromWishlist