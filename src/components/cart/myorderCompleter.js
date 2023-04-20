import El from "@/library/El";
// import counter from "./counter";
import removeItem from "./removeItem";

const myOrderCompleter = (orderList) => {
  // console.log(orderList[0])
  let orderArrays = orderList.map((order) => {
    // console.log(order)
    return El({
      element: "div",
      child: El({
        element: "div",
        className: "bg-white w-11/12 flex p-4 rounded-3xl mx-auto mb-4",
        child: [
          El({
            element: "div",
            child: El({
              element: "div",
              className:
                "w-24 h-24 bg-gray-100 rounded-3xl flex justify-center items-center",
              child: El({
                element: "img",
                src: order.images,
                className: "p-1",
              }),
            }),
          }),
          El({
            element: "div",
            className: "flex flex-col w-full gap-y-3 ml-4",
            child: [
              El({
                element: "div",
                className: "flex items-center w-full justify-between",
                child: [
                  El({
                    element: "h2",
                    child: order.title,
                  }),
                  removeItem(order.id),
                ],
              }),
              El({
                element: "div",
                className: "flex items-center gap-x-2",
                child: [
                  El({
                    element: "div",
                    child: "",
                    className: `w-4 h-4 rounded-full`,
                    style: `background-color:${order.choosenColor}`
                  }),
                  El({
                    element: "span",
                    child: order.choosenColor,
                    className: "text-xs text-gray-500",
                  }),
                  El({
                    element: "span",
                    child: "|",
                    className: "text-xs text-gray-500",
                  }),
                  El({
                    element: "span",
                    child: order.chosenSize,
                    className: "text-xs text-gray-500",
                  }),
                  El({
                    element: "span",
                    child: `Qty = ${order.quantity}`,
                    className: "text-xs text-gray-500",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-between items-center gap-x-10",
                child: [
                  El({
                    element: "span",
                    child: `$${order.priceAll}`,
                  }),
                  El({
                    element: 'div',
                    className: 'bg-slate-800 text-slate-100 rounded-2xl px-3 py-1 flex items-center justify-center',
                    child: "Track Order",
                    onclick: (e) => {

                      removeToCompleted(e.target.parentElement.parentElement.parentElement)
                    }

                  })
                ],
              }),
            ],
          }),
        ],
      }),
    });
  })
  // console.log(orderArrays)
  return orderArrays
};


function removeToCompleted(elem) {
  let completedCon = document.getElementById('completedOrders')
  completedCon.append(elem)
}
export default myOrderCompleter;
