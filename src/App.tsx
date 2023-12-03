import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Learning from "./pages/Learning";
import Layout from "./component/Layout";
import VocabLesson from "./pages/VocabLesson";
import { ToastContainer } from "react-toastify";
import CatsMenu from "./component/Menu/CatsMenu";
import Hstack from "./component/Hstack";
import BarChart from "./component/Chart/BarChart";
const router = createBrowserRouter([
  {
    path: "learnvocab",
    element: (
      <Hstack>
        <VocabLesson />
      </Hstack>
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

  // {
  //   path: "learnnewwords",
  //   element: <LearnNewWords />,
  // },
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
  // test
  {
    path: "H",
    element: <Hstack />,
  },
  // {
  //   path: "write",
  //   element: <Writewords />,
  // },
  {
    path: "chart",
    element: <BarChart />,
  },
  //
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
