import { Outlet } from 'react-router-dom';
import AdminBoard from "./AdminBoard";
const SidebarAdmin = () => (
  <div>     
    <AdminBoard />
    <Outlet />
  </div>
);

export default SidebarAdmin