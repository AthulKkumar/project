import { lazy } from "react";

const DashBoard = lazy(() => import("../pages/DashBoardPage/index"));
const Learning = lazy(() => import("../pages/LearningPage/index"));
const Tools = lazy(() => import("../pages/ToolsPage/index"));
const Profile = lazy(() => import("../pages/ProfilePage/index"));

const navigationRoutes = [
  {
    name: "DashBoard",
    path: "/",
    component: <DashBoard />,
  },
  {
    name: "Learning",
    path: "/learning",
    component: <Learning />,
  },
  {
    name: "Tools",
    path: "/tools",
    component: <Tools />,
  },
  {
    name: "Profile",
    path: "/profile",
    component: <Profile />,
  },
];

export default navigationRoutes;
