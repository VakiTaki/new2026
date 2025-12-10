import { Navigate } from "react-router-dom";
import Main from "./pages/Main";

export const routes = [
  {
    path: `/`,
    element: <Main />,
    display: true,
    index: true,
    title: "С Новым годом",
  },
  {
    path: "*",
    element: <Navigate to={`/`} />,
  },
];
