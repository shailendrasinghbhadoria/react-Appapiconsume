import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Header from './component/Header';
import CreateUser from './component/CreateUser';

function App() {
  return (
    <div className="App">
          <Header/>
          <Outlet/>
    </div>
    
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path: "/",
        element:<Login />,
      },
      {
        path: "/home",
        element:<Home/>,
      },
      {
        path: "/create-user",
        element:<CreateUser/>,
      },
    ]
  }
])

export default App;
