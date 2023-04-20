import axiosInstance from "./axiosInstance";
import renderProducts from "./renderProducts";
const observerInfite = (enteries, page) => {
  if (enteries[0].isIntersecting) {
    console.log('ob')
    console.log()
    page++;
    if (page > 1) {
      setTimeout(() => {
        axiosInstance.get(`/products?_page=${page}&_limit=6`).then(res => {
          let newCards = renderProducts(res.data)
          newCards.forEach((div) => {
            document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
          })

        })
      }, 1000)
    } else {
      console.log(page)
      axiosInstance.get(`/products?_page=${page}&_limit=6`).then(res => {
        let newCards = renderProducts(res.data)
        newCards.forEach((div) => {
          document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
        })

      })
    }

  }
  // console.log(page)
  // if (enteries[0].isIntersecting) {
  //   if (brand === "All") {
  //     // page++;
  //     if (page > 1) {
  //       setTimeout(() => {
  //         axiosInstance.get(`/products?_page=${page}&_limit=6`).then(res => {
  //           let newCards = renderProducts(res.data)
  //           newCards.forEach((div) => {
  //             document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
  //           })

  //         })
  //       }, 1000)
  //     } else {
  //       document.getElementById('cartHomeContainer').innerHTML = ''
  //       axiosInstance.get(`/products?_page=${page}&_limit=6`).then(res => {
  //         let newCards = renderProducts(res.data)
  //         console.log(newCards)
  //         newCards.forEach((div) => {
  //           document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
  //         })

  //       })
  //     }
  //   } else {
  //     // page++;
  //     if (page > 1) {
  //       setTimeout(() => {
  //         axiosInstance.get(`/products?brand=${brand}?_page=${page}&_limit=6`).then(res => {
  //           let newCards = renderProducts(res.data)
  //           newCards.forEach((div) => {
  //             document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
  //           })

  //         })
  //       }, 1000)
  //     } else {
  //       document.getElementById('cartHomeContainer').innerHTML = ''
  //       axiosInstance.get(`/products?brand=${brand}?_page=${page}&_limit=6`).then(res => {
  //         let newCards = renderProducts(res.data)
  //         console.log(newCards)
  //         newCards.forEach((div) => {
  //           document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
  //         })

  //       })
  //     }
  //   }


  // }
}

export default observerInfite