import { createBrowserRouter, RouterProvider } from "react-router"
import MainPage from "@/pages/main-page"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ],
  { basename: import.meta.env.BASE_URL },
)

export const Routes = () => {
  return <RouterProvider router={router} />
}
