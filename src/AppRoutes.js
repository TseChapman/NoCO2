import { Main } from "./components/Introduction/Main";
import About from "./components/Introduction/About";
import { SignUp } from "./components/AccountActionPage/SignUp/SignUp";
import { Login } from "./components/AccountActionPage/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { ActivityInputForm } from "./components/ActivityInputForm/ActivityInputForm";
import { useRoutes } from 'react-router-dom';

function AppRoutes() {
  let element = useRoutes([
    {path: '/NoCO2/', element: <Main />},
    {path: '/NoCO2/about', element: <About />},
    {path: '/NoCO2/signup', element: <SignUp />},
    {path: '/NoCO2/login', element: <Login />},
    {path: '/NoCO2/dashboard', element: <Dashboard />},
    {path: '/NoCO2/dashboard/activities', element: <ActivityInputForm />}
  ])

  return element;
}

export default AppRoutes;
