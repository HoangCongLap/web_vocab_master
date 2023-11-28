import { ChakraProvider } from "@chakra-ui/react";
import Learn from "./pages/Learn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SplitWithImage from "./component/SplitWithImage";
import ThreeTierPricing from "./component/ThreeTierPricing";
import LearnNewWords from "./component/LearnNewWords";
import FlipItemShadow from "./component/FlipItemShadow";
import Learning from "./pages/Learning";
import Lessons from "./component/Lessons";
import UseSound from "./component/UseSound";
import Layout from "./component/Layout";
import VocabLesson from "./pages/VocabLesson";
import { toast, ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "learn",
    element: <Learn />,
  },
  {
    path: "learnvocab",
    element: (
      <Layout>
        <VocabLesson />
      </Layout>
    ),
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
    path: "start",
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
