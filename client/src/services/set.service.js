import http from "../http-common";

class SetService {

    createSet = (data) => {
        return http.post("/set/create", data);
    };
    getAllSet = () => {
        return http.get("/set/all");
    };

    getSet = (id) => {
        return http.get("/set/id");
    };

    updateSet = () => {
        return http.put("/set/update/id");
    };

    deleteSet = (id) => {
        return http.delete(`/set/delete/${id}`);
    };
}
export default new SetService();
