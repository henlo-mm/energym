import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ResponsiveAppBar from "./Header";
const SidebarLayout = () => (
  <div>     
    <ResponsiveAppBar />
    <Outlet />
   {/*  <Footer /> */}
  </div>
);

export default SidebarLayout