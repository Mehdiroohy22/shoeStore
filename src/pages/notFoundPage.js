import El from "@/library/El";

const PageNotFound = () => {
  console.log('not')
  return El({
    element: "div",
    className: 'flex flex-col items-center justify-evenly',
    child: [
      El({
        element: 'h1',
        className: 'text-3xl font-bold',
        child: 'Page Not Found'
      }),
      El({
        element: "img",
        src: "http://localhost:5173/public/assets/svg/pageNotFound.svg",
      }),
      // El({
      //   element: "h1",
      //   child: title,
      //   className: "font-bold text-[40px]",
      // }),
      // El({
      //   element: "div",
      //   child: msg,
      //   className: "text-[30px]",
      // }),
    ],
  });
};

export default PageNotFound;