import RequestsPage from "./pages/RequestsPage";
import Auth from "./pages/Auth";

export const authRoutes = [
  {
    path: "/requests",
    Component: <RequestsPage />,
  },
  {
    path: "/",
    Component: <RequestsPage />,
  },
];

export const publickRouters = [
  {
    path: "/login",
    Component: <Auth />,
  },
  {
    path: "/",
    Component: <Auth />,
  },
  {
    path: "/registration",
    Component: <Auth />,
  },
];
