import Router from "@/functions/router";
import El from "@/library/El";

const editButton = () => {
  return El({
    element: "button",
    className: "flex",
    onclick: () => {
      Router().navigate('/shippingAddress')
    },
    child: El({
      element: "ion-icon",
      name: "create",
      className: "text-3xl",
    }),
  });
};

export default editButton;
