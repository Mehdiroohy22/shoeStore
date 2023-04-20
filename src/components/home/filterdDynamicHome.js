// import axiosInstance from "@/functions/axiosInstance"
// import renderProducts from "@/functions/renderProducts"
import Router from "@/functions/router"
import El from "@/library/El"

const filterdDynamicHome = (brand = '') => {
  return El({
    element: 'div',
    className: 'flex flex-col p-2',
    child: [
      El({
        element: 'div',
        className: 'flex items-center gap-2 mt-2 mb-2',
        child: [
          El({
            element: "ion-icon",
            name: "arrow-back",
            className: 'text-xl',
            onclick: () => {
              Router().navigate('/home')
            }
          }),
          El({
            element: 'span',
            child: brand,
            className: 'text-2xl font-bold'
          })
        ]
      }),

      El({
        element: "div",
        id: "cartDynamicHomeContainer",
        className: "flex flex-wrap justify-around items-center p-4 mb-2",
        child: ''
      })

    ]


  })
}
export default filterdDynamicHome