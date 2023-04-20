import deleteSearchHis from "@/functions/deleteSearchHis";
import El from "@/library/El";
import getRelDataOfSearch from "./getRelDataOfSearch";
// import search from "./search";

const showSearchElem = (oldSearch) => {
  return El({
    element: 'div',
    id: "searchHistoryElem",
    className: 'flex flex-col w-full mt-2 absolute top-[-30px] left-0 bg-white p-4',
    child: [
      El({
        element: 'div',
        className: 'flex items-center justify-between p-2',
        child: [
          El({
            element: 'span',
            className: 'text-2xl font-bold',
            child: 'Recent'
          }),
          El({
            element: 'button',
            className: "text-xl font-bold",
            child: 'Clear All',
            onclick: (e) => {
              deleteSearchHis(e.target.closest('button').innerText)
            }
          })
        ],

      }),
      El({
        element: 'ul',
        className: 'p-2 border-t border-t-1 list-none mt-2',
        child: [...liMaker(oldSearch)]
      })
    ]
  })
}

function liMaker(searchArr) {
  let liElemsArr = searchArr.map((li) => {
    return El({
      element: 'li',
      className: 'flex items-center justify-between text-2xl font-normal text-gray-400 pt-2 cursor-pointer',

      child: [
        El({
          element: 'p',
          className: 'flex-1',
          child: li,
          onclick: (e) => {
            getRelDataOfSearch(e)
          },
        }),
        El({
          element: 'ion-icon',
          name: 'close-circle-outline',
          className: 'text-3xl',
          onclick: (e) => {
            // console.log('one')
            deleteSearchHis(e.target.previousElementSibling.innerText, e)
          }
        })
      ]
    })
  })
  // if (liElemsArr.length > 9) {
  //   liElemsArr.slice()
  // }
  return liElemsArr
}

window.addEventListener('click', (e) => {
  const elem = document.getElementById('searchHistoryElem')
  if (elem && e.target.id !== 'searchHistoryElem' && e.target.id !== 'searchInput') {
    elem.remove()
  }
})

export default showSearchElem;