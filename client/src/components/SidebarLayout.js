import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from "./Header";
const SidebarLayout = () => (
  <div>     
    <ResponsiveAppBar />

    <Outlet />
  
  </div>
);

export default SidebarLayout