import http from "../http-common";

class ExerciseService {

    createExercise = (data) => {
        return http.post("/exercise/create", data);
    };
    getAllExercise = () => {
        return http.get("/exercise/all");
    };

    getExercise = (id) => {
        return http.get("/exercise/id");
    };

    updateExercise = () => {
        return http.put("/exercise/update/id");
    };

    deleteExercise = (id) => {
        return http.delete(`/exercise/delete/${id}`);
    };
}
export default new ExerciseService();
