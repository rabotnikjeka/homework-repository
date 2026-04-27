import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "posts",
        element: <PostsPage />,

        errorElement: <ErrorPage />,
      },
      { path: "posts/:id", element: <PostDetailPage /> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
