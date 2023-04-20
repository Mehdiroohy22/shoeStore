import El from "@/library/El";
import homeNavbar from "@/components/home/navbar";
import homeSearch from "@/components/home/searchBar";
import brandsCategory from "@/components/home/brandsCategory";
// import filterBrands from "@/components/home/filterBrands";
// import shoe from "@/components/cart/shoe";
import footer from "@/components/home/footer";
import renderProducts from "@/functions/renderProducts";
import axiosInstance from "@/functions/axiosInstance";
import infinit from "@/functions/infinite";
// import observerInfite from "@/functions/observerInfit";
// import observerInfite from "@/functions/observerInfit";
// let page = 0;
// const loadingFunc = () => {
//   return El({
//     element: 'div',
//     id: 'loading',
//     className: "w-full flex items-center justify-center mt-2 mb-24",
//     child: [
//       El({
//         element: 'span',
//         className: '',
//         child: 'Loading...'
//       })
//     ]
//   })
// };
// let loading = loadingFunc()

const home = () => {

  const app = El({
    element: "div",
    className: 'relative',
    id: 'home-container',
    child: [
      homeNavbar(),
      homeSearch(),
      El({
        element: "div",
        className:
          "px-4 pb-7 flex flex-wrap justify-center items-center gap-x-5 gap-y-8",
        id: 'brandCategory'
      }),

      El({
        element: "div",
        className: "flex justify-between items-center px-6",
        child: [
          El({
            element: "h2",
            child: "Most Popular",
            className: "font-medium text-lg text-black",
          }),
          El({
            element: "a",
            href: "",
            child: "See All",
            className: "text-gray-500 text-sm",
          }),
        ],
      }),
      filterBrands(),
      El({
        element: "div",
        id: "cartHomeContainer",
        className: "flex flex-wrap justify-around items-center pl-2 mb-6",
        child: '',
      }),
      // loadingFunc(),
      El({
        element: 'div',
        id: 'loading',
        className: "w-full flex items-center justify-center mt-2 mb-24",
        child: [
          El({
            element: 'span',
            className: '',
            child: 'Loading...'
          })
        ]
      }),
      footer(),
    ],
  });
  brandsCategory()

  return app;
};
// let page = 0;
// const observer = new IntersectionObserver(enteries => {
//   // observerInfite(enteries, page)
//   // observerInfite(enteries, "All", page)
//   if (enteries[0].isIntersecting) {
//     // console.log('ob')
//     // console.log()
//     page++;
//     if (page > 1) {
//       setTimeout(() => {
//         axiosInstance.get(`/products?_page=${page}&_limit=6`).then(res => {
//           let newCards = renderProducts(res.data)
//           newCards.forEach((div) => {
//             document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
//           })

//         })
//       }, 800)
//     } else {
//       console.log(page)
//       axiosInstance.get(`/products?_page=${page}&_limit=6`).then(res => {
//         let newCards = renderProducts(res.data)
//         newCards.forEach((div) => {
//           document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
//         })

//       })
//     }

//   }
// });
// let loading = document.getElementById('loading')
// observer.observe(loading)


// select the content and create an observer
// const content = document.querySelector('#loading');
// console.log(content)
// const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });

// // observe the last item in the content
// // const lastItem = content
// observer.observe(content);

// // function to handle the intersection
// function handleIntersection(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       // load more content when the last item is visible
//       loadMoreContent();
//       // observe the new last item
//       observer.observe(content);
//     }
//   });
// }

// // function to load more content
// function loadMoreContent() {
//   // simulate loading by adding 10 new items
//   for (let i = 1; i <= 10; i++) {
//     // const newItem = document.createElement('p');
//     // newItem.textContent = content.children.length + i;
//     // content.appendChild(newItem);
//     axiosInstance.get(`/products?_page=${i}&_limit=6`).then(res => {
//       let newCards = renderProducts(res.data)
//       newCards.forEach((div) => {
//         document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
//       })

//     })
//   }


// }





const brands = [
  { name: "All" },
  { name: "Nike" },
  { name: "Adidas" },
  { name: "Puma" },
  { name: "Asics" },
  { name: "Reebok" },
  { name: "New Balance" },
  { name: "Converse" },
];

const filterBrands = () => {
  const buttons = brands.map((brand) =>
    El({
      element: "button",
      child: brand.name,
      className:
        "flex items-center text-[#343A40] gap-1 rounded-full border-[#343A40] border-2 border-solid px-4 py-1",
      onclick: () => {
        filterShow(brand.name)
      }
    })
  );

  const handleClick = (clickedIndex) => {
    buttons.forEach((button, index) => {
      if (index === clickedIndex) {
        button.style.backgroundColor = "#343A40";
        button.style.color = "white";
      } else {
        button.style.backgroundColor = "white";
        button.style.color = "#343A40";
      }
    });
  };

  handleClick(0); // Select the first button by default

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      handleClick(index);
    });
  });

  return El({
    element: "div",
    className: "pb-6",
    child: [
      El({
        element: "div",
        className: "overflow-scroll scrollbar-hide pl-6",
        child: El({
          element: "div",
          className: "flex gap-2 justify-around items-center py-5 w-max",
          child: buttons,
        }),
      }),
    ],
  });
};


// async function filterShow(brand) {
//   let shoeHomeContainer = document.getElementById('cartHomeContainer')
//   if (brand === 'All') {
//     shoeHomeContainer.innerHTML = '';
//     observerInfite(enteries, 'All', page = 1)
//     return
//   } else {

//     shoeHomeContainer.innerHTML = '';
//     let shoesFilteredCarts = await axiosInstance.get(`/products?brand=${brand.toLowerCase()}`).then(res => {
//       console.log(res.data)
//       let proArray = renderProducts(res.data)
//       proArray.forEach((pro) => {
//         shoeHomeContainer.append(pro)
//       })

//     })
//     console.log(shoesFilteredCarts)
//   }
// }
// let html = '';
async function filterShow(brand) {
  if (brand === 'All') {
    document.getElementById('cartHomeContainer').innerHTML = ""
    document.getElementById('loading').classList.remove('hidden')
    infinit()
    // document.getElementById('cartHomeContainer').innerHTML = ""
    // console.log('all')
  } else {
    // page = 0;
    document.getElementById('loading').classList.add('hidden')
    // html = document.getElementById('cartHomeContainer').innerHTML
    document.getElementById('cartHomeContainer').innerHTML = ''
    // console.log(brand.toLowerCase().replace(/\s+/g, ''))
    axiosInstance.get(`/products?brand=${brand.toLowerCase().replace(/\s+/g, '')}`).then(res => {
      let newCards = renderProducts(res.data)
      newCards.forEach((div) => {
        document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
      })

    })
    // document.getElementById('loading').classList.add('hidden')
    // console.log(brand)
    // document.getElementById('cartHomeContainer').innerHTML = ''
    // axiosInstance.get(`/products?brand=${brand.toLowerCase()}`).then(res => {
    //   let newCards = renderProducts(res.data)
    //   newCards.forEach((div) => {
    //     document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
    //   })

    // })
  }

}


export default home;
