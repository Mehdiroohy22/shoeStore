import El from "@/library/El";

const counter = () => {
  return El({
    element: "div",
    child: El({
      element: "div",
      className: "flex flex-row rounded-full relative bg-transparent",
      child: [
        El({
          element: "button",
          dataAction: "decrement",
          className:
            " bg-gray-100 w-7 h-7 text-gray-600 rounded-l-xl cursor-pointer outline-none -mr-px",
          child: El({
            element: "span",
            child: "-",
            className: "align-text-bottom",
          }),
        }),
        El({
          element: "span",
          id: 'quantity',
          child: "0",
          className:
            "w-7 h-7 bg-gray-100 text-gray-700 text-sm flex justify-center items-center",
        }),
        El({
          element: "button",
          dataAction: "increment",
          className:
            "bg-gray-100 text-gray-600 rounded-r-xl cursor-pointer w-7 h-7 -ml-px",
          child: El({
            element: "span",
            child: "+",
            className: "align-text-bottom",
          }),
        }),
      ],
    }),
  });
};

export default counter;
