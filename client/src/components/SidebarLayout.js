import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ResponsiveAppBar from "./Header";
const SidebarLayout = () => (
  <>     
    <ResponsiveAppBar />
    <Outlet />
    <Footer />
  </>
);

export default SidebarLayout