import axiosInstance from "./axiosInstance"

const calcPriceAllShoeInfo = (id, count) => {
  axiosInstance.get(`/products/${id}`).then(res => {
    let perPrice = res.data.price;
    let totalSpanShoeInfoPrice = (count * perPrice);
    document.getElementById('totalPriceSpan').innerHTML = `$${totalSpanShoeInfoPrice}`
  })

}
export default calcPriceAllShoeInfo