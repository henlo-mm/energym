import { Outlet } from 'react-router-dom';
import UserBoard from "./UserBoard";
const SidebarUser = () => (
  <div>     
    <UserBoard />
    <Outlet />
  </div>
);

export default SidebarUser