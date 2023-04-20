import axiosInstance from "./axiosInstance";
import renderProducts from "./renderProducts";

// const infinit = () => {

//   // select the content and create an observer
//   const content = document.querySelector('#loading');
//   console.log(content)
//   const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });

//   // observe the last item in the content
//   // const lastItem = content
//   observer.observe(content);

//   // function to handle the intersection
//   function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio > 0) {
//         // load more content when the last item is visible
//         loadMoreContent();
//         // observe the new last item
//         observer.observe(content);
//       }
//     });
//   }

//   // function to load more content
//   function loadMoreContent() {
//     // simulate loading by adding 10 new items
//     for (let i = 1; i <= 20; i++) {
//       // const newItem = document.createElement('p');
//       // newItem.textContent = content.children.length + i;
//       // content.appendChild(newItem);

//       setTimeout((

//       ) => {
//         axiosInstance.get(`/products?_page=${i}&_limit=6`).then(res => {
//           let newCards = renderProducts(res.data)
//           newCards.forEach((div) => {
//             document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
//           })

//         })
//       }, 1000)


//     }


//   }



// }
// export default infinit
const infinit = () => {


  let page = 0;
  const observer = new IntersectionObserver(enteries => {
    // observerInfite(enteries, page)
    // observerInfite(enteries, "All", page)
    if (enteries[0].isIntersecting) {
      // console.log('ob')
      // console.log()
      page++;
      // if (page > 1) {
      setTimeout(() => {
        axiosInstance.get(`/products?_page=${page}&_limit=6`).then(res => {
          let newCards = renderProducts(res.data)
          newCards.forEach((div) => {
            document.getElementById('cartHomeContainer').insertAdjacentElement('beforeend', div)
          })

        })
      }, 1000)

    }
  });
  let loading = document.getElementById('loading')
  observer.observe(loading)

}
export default infinit