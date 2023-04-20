// import axiosInstance from "@/functions/axiosInstance";
import axiosInstance from "@/functions/axiosInstance";
import Router from "@/functions/router";
import El from "@/library/El";
// import shoeInfo from "@/pages/shoeInfo";


// let brands;

// (async () => {
//   await axiosInstance.get('/products').then(res => {
//     const repBrands = res.data.map((obj) => obj.brand)
//     brands = new Set(repBrands)
//     console.log(brands)

//   })
// })();



// const sendGetRequest = async () => {

//   let pro = await axiosInstance.get('/products').then(res => res.data)
//   return pro
//   // Handle Error Here



// };

const brandsCategory = async () => {
  let brands = await brandsCategoryMaker()
  brands = [...new Set(brands)]
  console.log(brands)
  // console.log(brands)
  const brandCategoryCotainer = document.getElementById('brandCategory')



  brands.map((brand) =>
    brandCategoryCotainer.append(El({
      element: "div",
      className: "flex flex-col items-center",
      child: [
        El({
          element: "button",
          onclick: () => {
            Router().navigate(`/home/${brand}`)
          },
          className:
            "w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center mb-4",
          child: El({
            element: "img",
            src: `./public/assets/images/brand-logos/${brand}.png`,

          }),
        }),
        El({
          element: "span",
          child: brand.charAt(0).toUpperCase() + brand.slice(1),
        }),
      ],
    })
    )
  )
}

const brandsCategoryMaker = async () => {
  let AllBrands = [];
  await axiosInstance.get('/products').then(res => res.data).then(objs => {
    // console.log(objs)
    objs.forEach(obj => {
      AllBrands.push(obj.brand)
    })
  })
  // let Allbrands = await axiosInstance.get('/products').then(res => {
  //   let allBrands = res.data.map(element => {
  //     return element.brand
  //   });
  //   return allBrands
  // }).then(res => brandsCategoryMaker(res))
  // console.log(Allbrands)
  return AllBrands
}
// console.log(brandsCategory())
export default brandsCategory;
