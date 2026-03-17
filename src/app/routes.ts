import { createBrowserRouter } from "react-router";
import { MainPage } from "./components/MainPage";
import { WorkPage } from "./components/WorkPage";
import { PhotographyPage } from "./components/PhotographyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/work",
    Component: WorkPage,
  },
  {
    path: "/photography",
    Component: PhotographyPage,
  },
]);
