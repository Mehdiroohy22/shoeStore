// import axiosInstance from "@/functions/axiosInstance";
// import observerInfite from "@/functions/observerInfit";
// import renderProducts from "@/functions/renderProducts";
import axiosInstance from "@/functions/axiosInstance";
// import observerInfite from "@/functions/observerInfit";
import renderProducts from "@/functions/renderProducts";
import El from "@/library/El";
// import { page } from "@/pages/home";
// import { loading } from "@/pages/home";
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
    document.getElementById('loading').classList.remove('hidden')
    document.getElementById('cartHomeContainer').innerHTML = ""
  } else {
    document.getElementById('loading').classList.add('hidden')
    // html = document.getElementById('cartHomeContainer').innerHTML
    document.getElementById('cartHomeContainer').innerHTML = ''
    axiosInstance.get(`/products?brand=${brand.toLowerCase()}`).then(res => {
      let newCards = renderProducts(res.data)
      newCards.forEach((div) => {
        document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
      })

    })
    // document.getElementById('loading').classList.add('hidden')
    // console.log(brand)
    document.getElementById('cartHomeContainer').innerHTML = ''
    axiosInstance.get(`/products?brand=${brand.toLowerCase()}`).then(res => {
      let newCards = renderProducts(res.data)
      newCards.forEach((div) => {
        document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
      })

    })
  }

}

export default filterBrands;
