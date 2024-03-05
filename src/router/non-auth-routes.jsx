import { lazy } from "react";

const Signin = lazy(() => import("../pages/RegisterPage/index"));
const Onboarding = lazy(() => import("../pages/OnbordingPage/index"));
const Walktrough = lazy(() => import("../pages/OnbordingPage/Skills/index"));

export default [
  {
    name: "Register",
    path: "/register",
    conponent: Signin,
  },
  {
    name: "Onboarding",
    path: "/onboarding",
    conponent: Onboarding,
  },
  {
    name: "Walkthrough",
    path: "/walktrough",
    conponent: Walktrough,
  },
];
