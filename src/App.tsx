import { ChakraProvider } from "@chakra-ui/react";
import Learn from "./component/Learn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import Nav from "./component/Nav";
import Login from "./component/Login";
import Signup from "./component/Signup";
import SplitWithImage from "./component/SplitWithImage";
import ThreeTierPricing from "./component/ThreeTierPricing";
import LearnNewWords from "./component/LearnNewWords";
import FlipItemShadow from "./component/FlipItemShadow";
import StartLearn from "./component/StartLearn";
import Lessons from "./component/Lessons";
import UseSound from "./component/UseSound";
const router = createBrowserRouter([
  {
    path: "learn",
    element: <Learn />,
  },
  {
    path: "home",
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
  {
    path: "flip",
    element: <FlipItemShadow />,
  },
  // chia màn hình thành 3 phần
  {
    path: "start",
    element: <StartLearn />,
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
    </ChakraProvider>
  );
}

export default App;
