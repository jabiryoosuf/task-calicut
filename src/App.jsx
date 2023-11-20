import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
]);

function App() {
  return  <RouterProvider router={router} />
}

export default App;
