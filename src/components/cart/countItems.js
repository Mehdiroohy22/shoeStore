import El from "@/library/El";

const countItems = () => {
  return El({
    element: "div",
    className:
      "flex justify-center items-center font-bold bg-gray-100 rounded-full w-8 h-8",
    child: [
      El({
        element: "span",
        child: "1",
      }),
    ],
  });
};

export default countItems;
