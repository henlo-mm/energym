import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ResponsiveAppBar from "./Header";
import Home from './Home';
const SidebarLayout = () => (
  <div>     
    <ResponsiveAppBar />
    {/* <Home /> */}
    <Outlet />
   {/*  <Footer /> */}
  </div>
);

export default SidebarLayout