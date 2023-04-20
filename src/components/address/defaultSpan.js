import El from "@/library/El";

// default span for address cart
const defaultSpan = () => {
  return El({
    element: "div",
    child: "Default",
    className: "text-xs bg-slate-200 self-center p-1 rounded",
  });
};

export default defaultSpan;
