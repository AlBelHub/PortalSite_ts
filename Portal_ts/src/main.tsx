import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./root.tsx";
import ErrorPage from "./error-page.tsx";
import MainPage from "./routes/mainPage.tsx";
import Structure from "./routes/Structure.tsx";
import Science from "./routes/Science.tsx";
import Orders from "./routes/Orders.tsx";
import BusinessTrip from "./routes/BusinessTrip.tsx";
import Errands from "./routes/Errands.tsx";
import Booking from "./routes/Booking.tsx";
import Library from "./routes/Library.tsx";

import "./styles/base.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/main",
        element: <MainPage />
      },
      {
        path: "/structure",
        element: <Structure />
      },
      {
        path: "/science",
        element: <Science />
      },
      {
        path: "/orders",
        element: <Orders />
      },
      {
        path: "/businessTrip",
        element: <BusinessTrip />
      },
      {
        path: "/errands",
        element: <Errands />
      },
      {
        path: "/booking",
        element: <Booking />
      },
      {
        path: "/library",
        element: <Library />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
