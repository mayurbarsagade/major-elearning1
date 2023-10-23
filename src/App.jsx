import { Layout } from "./Component";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { RouterProvider } from "react-router-dom";

import {
  Homepage,
  Aboutpage,
  Searchpage,
  Cartpage,
  Checkoutpage,
  Mylearningpage,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "about", element: <Aboutpage /> },
        { path: "search", element: <Searchpage /> },
        { path: "cart", element: <Cartpage /> },
        { path: "checkoutpage", element: <Checkoutpage /> },

        { path: "mylearning", element: <Mylearningpage /> },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
