import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Signin from "./pages/RegisterPage";
import Onboarding from "./pages/OnbordingPage";
import Walktrough from "./pages/OnbordingPage/Skills";
function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Signin />,
    },
    {
      path: "/onboarding",
      element: <Onboarding />,
    },
    {
      path: "/walktrough",
      element: <Walktrough />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
