import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./component/Nav";
import Learning from "./pages/Learning";
import VocabLesson from "./pages/VocabLesson";
import { ToastContainer } from "react-toastify";
import CatsMenu from "./component/Menu/CatsMenu";
import Hstack from "./component/Stack/Hstack";
import BarChart from "./component/Chart/BarChart";
import ReviewAnswer from "./component/ReviewAnswer/ReviewAnswer";
import BoxAnswer from "./component/Boxx/BoxAnswer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import { setupFirebase } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import WrongAnswer from "./component/WrongAnswer/WrongAnswer";
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
  {
    path: "review",
    element: (
      <Hstack>
        <BarChart />
      </Hstack>
    ),
  },
  {
    path: "reviewAnswer",
    element: (
      <Hstack>
        <ReviewAnswer />
      </Hstack>
    ),
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
    path: "/learning/:courseId/:lessionId",
    element: <Learning />,
  },
  //=========== test
  // {
  //   path: "H",
  //   element: <Hstack />,
  // },

  {
    path: "chart",
    element: <BarChart />,
  },
  {
    path: "box",
    element: <BoxAnswer />,
  },
  {
    path: "drawer",
    // element: <DrawerCourse />,
  },
  {
    path: "wrong",
    element: <WrongAnswer />,
  },
]);
function App() {
  const [indexState, setIndexState] = useState(0);
  useEffect(() => {
    setupFirebase();
    const auth = getAuth();
    onAuthStateChanged(auth, () => {
      setIndexState(indexState + 1);
    });
  }, []);
  return (
    <ChakraProvider key={indexState}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
