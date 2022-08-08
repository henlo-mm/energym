import http from "../http-common";
import authHeader from "./auth-header";
class UserService {

  getAllUser = () => {
    return http.get("/user/all");
  };
  
  getUser = () => {
    return http.get("/user/:id");
  };
  
  updateUser = () => {
    return http.put("/user/update/:id");
  };
  
  deleteUser = () => {
    return http.delete("/user/delete/:id");
  };
}
export default new UserService();