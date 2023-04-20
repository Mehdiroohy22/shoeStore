import axiosInstance from "./axiosInstance"

const calculateAllCost = (containerID = 'allCost') => {
  let allCost = 0;
  axiosInstance.get('/ordersList').then(res => {
    let carts = res.data
    carts.forEach(order => {
      allCost += order.priceAll
    });
    // console.log(allCost)
    document.getElementById(containerID).append(allCost)
    console.log(allCost)
  })
}
export default calculateAllCost