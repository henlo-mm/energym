import http from "../http-common";
class UserService {

  createUser = (data) => {
    return http.post("/user/create", data);
  };

  getAllUser = () => {
    return http.get("/user/all");
  };

  getAllClient = () => {
    return http.get("/user/allClient");
  };
  getAllInstructor = () => {
    return http.get("/user/allInstructor");
  };
  
  getUser = (id) => {
    return http.get("/user/id");
  };
  
  updateUser = () => {
    return http.put("/user/update/id");
  };
  
  deleteUser = (id) => {
    return http.delete(`/user/delete/${id}`);
  };
}
export default new UserService();