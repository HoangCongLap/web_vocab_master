import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SplitWithImage from "./component/SplitWithImage";
import ThreeTierPricing from "./component/ThreeTierPricing";
import LearnNewWords from "./component/LearnNewWords";
import Learning from "./pages/Learning";
import Lessons from "./component/Lessons";
import UseSound from "./component/Sound/UseSound";
import Layout from "./component/Layout";
import VocabLesson from "./pages/VocabLesson";
import { ToastContainer } from "react-toastify";
import ProgressBar from "./component/Progress/ProgressBar";
import CatsMenu from "./component/Menu/CatsMenu";
import Hstack from "./component/Hstack";
const router = createBrowserRouter([
  {
    path: "learnvocab",
    element: (
      <Layout>
        <VocabLesson />
      </Layout>
    ),
  },
  {
    path: "menu",
    element: <CatsMenu />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "nav",
    element: <Nav />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "spli",
    element: <SplitWithImage />,
  },
  {
    path: "three",
    element: <ThreeTierPricing />,
  },
  {
    path: "learnnewwords",
    element: <LearnNewWords />,
  },
  //ảnh khi xuất hiện từ để học
  // {
  //   path: "flip",
  //   element: <FlipItemShadow />,
  // },
  // chia màn hình thành 3 phần
  {
    path: "learning",
    element: <Learning />,
  },
  {
    path: "lessons",
    element: <Lessons />,
  },
  {
    path: "so",
    element: <UseSound />,
  },
  {
    path: "progess",
    element: <ProgressBar />,
  },
  {
    path: "H",
    element: <Hstack />,
  },
]);
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
