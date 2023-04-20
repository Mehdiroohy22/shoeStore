import axiosInstance from "./axiosInstance"

const promoCode = () => {
  let code = document.getElementById('promoCode').value
  axiosInstance.get('/promoCode').then(res => {
    let answer = res.data.find(cd => {
      return cd === code

    });
    if (answer) {
      document.getElementById('promoCode').value = ''
      document.getElementById('promoCode').style.border = 'none'
      if (code === 'gold') {
        off(25)
      } else if (code === 'silver') {
        off(15)
      } else {
        off(5)
      }
    } else {
      document.getElementById('promoCode').value = 'Wrong Code';
      document.getElementById('promoCode').style.border = '2px solid red'
    }
  })

}

function off(num) {
  axiosInstance.get('/users/1').then(res => {
    console.log(res.data)
    // document.getElementById('promoCode').style.border = 'none'
    if (!res.data.off) {
      let allCost = document.getElementById('totalCheckout').innerHTML;
      allCost = Number(allCost.slice(1));
      let finalCost = allCost - (num / 100) * allCost
      document.getElementById('totalCheckout').innerHTML = `$${finalCost}`
      console.log(finalCost)
      axiosInstance.patch('/users/1', { "off": true })
    } else {
      document.getElementById('promoCode').style.border = '2px solid red'
      document.getElementById('promoCode').value = 'Used before!!'
    }
  })
  // axiosInstance.put('/users/1', {"off":true})

}

export default promoCode