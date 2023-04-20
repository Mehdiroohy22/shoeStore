import Router from "@/functions/router";
// import searchFunc from "@/functions/searchFunc";
// import showSearchHistory from "@/functions/showSearchHistory";
import El from "@/library/El";

const homeSearch = () => {
  return El({
    element: "div",
    className: "relative px-4 pb-6",
    onclick: () => {
      Router().navigate("/search");
    },
    child: [
      El({
        element: "input",
        type: "text",
        placeholder: "Search",
        id: 'searchInput',
        className:
          "py-2 w-full pl-10 bg-slate-50 placeholder:text-slate-300 text-slate-500 rounded border-none focus:ring-gray-400",
        // onkeyup: (e) => {

        //   searchFunc(e)

        // },
        // onfocus: () => {
        //   showSearchHistory()
        // }
      }),
      El({
        element: "ion-icon",
        name: "search-outline",
        className: "absolute top-3 left-7 text-lg text-gray-300",
      }),
    ],
  });
};

export default homeSearch;
