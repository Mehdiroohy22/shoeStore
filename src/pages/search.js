import El from "@/library/El";
import footer from "@/components/home/footer";
import searchFunc from "@/functions/searchFunc";
import showSearchHistory from "@/functions/showSearchHistory";

const search = () => {
  return El({
    element: "div",
    child: [
      El({
        element: "div",
        className: "relative p-6",
        child: [
          El({
            element: "input",
            onkeyup: (e) => {
              // searchKeyUp(e);
              searchFunc(e);
            },
            onfocus: (e) => {
              // searchFocus();
              showSearchHistory(e);
            },
            type: "text",
            placeholder: "Search",
            id: "searchInput",
            className:
              "py-3 w-full pl-10 bg-gray-100 placeholder:text-slate-400 text-slate-800 rounded-xl border-none focus:ring-black",
          }),
          El({
            element: "ion-icon",
            name: "search",
            className:
              "absolute top-[38px] align-top left-9 text-xl text-gray-400",
          }),
          El({
            element: "ion-icon",
            name: "options",
            className:
              "absolute top-[38px] align-top right-9 text-xl text-gray-400",
          }),
        ],
      }),
      El({
        element: "div",
        child: "",
        className: "flex flex-wrap justify-around items-center p-4 mb-2 relative",
        id: "showResult",
      }),
      footer(),
    ],
  });
};

export default search;


// const search = () => {
//     let lastSearches = [];

//     let input = El({
//       element: "input",
//       type: "text",
//       placeholder: "Search",
//       className:
//         "py-3 w-full pl-10 bg-gray-100 placeholder:text-slate-400 text-slate-800 rounded-xl border-none focus:ring-black",
//     });

//     let lastSearchesContainer = El({
//       element: "div",
//       className:
//         "absolute top-full left-0 right-0 bg-white shadow-md rounded-b-xl hidden z-10",
//     });

//     // Add a click event listener to the input element
//     input.addEventListener("click", () => {
//       // Show the last searches container
//       lastSearchesContainer.style.display = "block";
//     });

//     // Add a blur event listener to the input element
//     input.addEventListener("blur", () => {
//       // Hide the last searches container
//       lastSearchesContainer.style.display = "none";
//     });

//     // Add a keyup event listener to the input element
//     input.addEventListener("keyup", (event) => {
//       // Get the value of the input element
//       let value = event.target.value.trim();

//       if (event.key === "Enter") {
//         // If the user presses Enter, add the search term to the last searches array
//         if (value !== "") {
//           lastSearches.unshift(value);
//         }

//         // Clear the input element
//         event.target.value = "";

//         // Hide the last searches container
//         lastSearchesContainer.style.display = "none";
//       } else {
//         // If the user is typing, show the last searches container
//         lastSearchesContainer.style.display = "block";

//         // Filter the last searches array to show only the matches
//         let matches = lastSearches.filter((search) =>
//           search.toLowerCase().includes(value.toLowerCase())
//         );

//         // Clear the last searches container
//         lastSearchesContainer.innerHTML = "";

//         if (matches.length > 0) {
//           // Create a div to hold the search results
//           let resultsContainer = El({
//             element: "div",
//             className: "p-4",
//           });

//           // Create a div for each match and append it to the results container
//           matches.forEach((match) => {
//             let div = El({
//               element: "div",
//               className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
//               textContent: match,
//             });

//             div.addEventListener("click", () => {
//               // When the user clicks on a match, set the input value to the match
//               input.value = match;

//               // Hide the last searches container
//               lastSearchesContainer.style.display = "none";
//             });

//             resultsContainer.appendChild(div);
//           });

//           // Append the results container to the last searches container
//           lastSearchesContainer.appendChild(resultsContainer);

//           // Set the position of the last searches container based on the position of the input element
//           let inputRect = input.getBoundingClientRect();

//           lastSearchesContainer.style.top = inputRect.bottom + "px";
//           lastSearchesContainer.style.left = inputRect.left + "px";
//           lastSearchesContainer.style.width = inputRect.width + "px";
//         }
//       }
//     });

//     // Add the input element and the last searches container to a div
//     return El({
//       element: "div",
//       child: [input, lastSearchesContainer],
//     });
//   };
