import { Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Users from "./Components/Users/Users.jsx";
import Customers from "./Components/Customers/Customers.jsx";
import UserDetail from "./UserDetail/UserDetail.jsx";

let customerPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/users",
        loader: () => {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
        Component: Users,
      },
      {
        path: "/customers",
        element: (
          <Suspense fallback={<div>"loading....."</div>}>
            <Customers customerPromise={customerPromise}></Customers>
          </Suspense>
        ),
      },
      {
        path: "/users/:userId",
        Component: UserDetail,
        loader: ({ params }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
          );
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
