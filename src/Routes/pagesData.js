import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const pagesData = [
  {
    path: "/",
    element: <Home />,
    title: "home"
  },
  {
    path: "*",
    element: <ErrorPage />,
    title: "about"
  }
];

export default pagesData;