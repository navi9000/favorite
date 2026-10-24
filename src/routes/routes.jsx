import { createBrowserRouter, RouterProvider } from "react-router"
import MainPage from "@/pages/main-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
