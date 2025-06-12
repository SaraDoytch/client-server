import { createBrowserRouter } from "react-router"; 
import AppLayout from "../components/AppLayout";
import Home from "../components/Home";
import LoginIn from "../components/LoginIn";
import UserLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import About from "../components/About";
import SearchDrive from "../components/SearchDrive";
import RideInfoCard from "../components/RideInfoCard";
import SuggestionDrive from "../components/SuggestionDrive";
import UserProfile from "../components/UserProfile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "loginForm", element: <UserLayout />,
        children: [
          { index: true, element: <LoginForm /> },
        ]
      },
      { path: "loginIn", element: <LoginIn /> },
      { path: "UserProfile", element: <UserProfile/> },
      { path: "About", element: <About /> },
      {
        path: "SearchDrive", 
        children: [
          { index: true, element: <SearchDrive /> }, 
          { path: ":_id", element: <RideInfoCard /> }
        ]
      },
      { path: "SuggestionDrive", element: <SuggestionDrive /> },
    ]
  }
]);

export default router;