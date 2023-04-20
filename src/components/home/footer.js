import Router from "@/functions/router";
import El from "@/library/El";

const footer = () => {
  const icons = [
    { name: "home-outline", secondName: "home", text: "Home", route: "/home" },
    { name: "bag-outline", secondName: "bag", text: "Cart", route: "/myCart" },
    {
      name: "cart-outline",
      secondName: "cart",
      text: "Orders",
      route: "/myOrders",
    },
    {
      name: "wallet-outline",
      secondName: "wallet",
      text: "Wallet",
      route: "/checkout",
    },
    {
      name: "person-outline",
      secondName: "person",
      text: "Profile",
      route: "/home",
    },
  ];

  const footerItems = icons.map((icon) => {
    return El({
      element: "div",
      onclick: () => {
        const name = icon.name;
        const secondName = icon.secondName;
        const iconEl = document.querySelector(`ion-icon[name="${icon.name}"]`);
        // console.log(iconEl);
        if (iconEl) {
          iconEl.setAttribute(
            "name",
            name === iconEl.getAttribute("name") ? secondName : name
          );
        }
        Router().navigate(`${icon.route}`);
      },
      className: "flex flex-col",
      child: [
        El({
          element: "button",
          child: El({
            element: "ion-icon",
            className: "text-3xl",
            name: icon.name,
          }),
        }),
        El({
          element: "span",
          className: "text-xs",
          child: icon.text,
        }),
      ],
    });
  });

  return El({
    element: "div",
    className:
      "w-full fixed bottom-0 py-2 flex gap-x-10 justify-center items-center bg-white",
    child: footerItems,
  });
};

export default footer;