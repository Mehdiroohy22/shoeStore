// import homeSearch from "./components/home/searchBar";
import El from "./library/El";
// import home from "./pages/home";
// import search from "./pages/search";

const App = () => {
  const app = El({
    element: "div",
    id: "root",
    // child: home()
  });

  return app;
};

export default App;
