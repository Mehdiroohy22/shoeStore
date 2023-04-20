// import axiosInstance from "@/functions/axiosInstance"
// import Router from "@/functions/router"
import showSearchPage from "./showSearchPage"

const getRelDataOfSearch = (e) => {
  const searchItem = e.target.closest('li').innerText
  showSearchPage(searchItem)

}
export default getRelDataOfSearch
// const filterdDynamicHome = () => {
  // Router().navigate(`/home/search/${searchItem}`)
//   return El({
//     element: 'div',
//     className: 'flex flex-col p-2',
//     child: [
//       El({
//         element: "ion-icon",
//         name: "arrow-back",
//         onclick: () => {
//           Router().navigate('/home')
//         }
//       }),
//       El({
//         element: "div",
//         id: "searchNewPage",
//         className: "flex flex-wrap justify-around items-center p-4 mb-2",
//         child: ''
//       })

//     ]


//   })
// }