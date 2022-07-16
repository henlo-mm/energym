import http from "../http-common";
class AuthUser {

    create(data) {
        return http.post("/auth/signup", data);
    }

    login (data) {
        return http.post("/auth/signin", data)
           /*  .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
        return response.data;
        }); */
    };

    logout  () {
        localStorage.removeItem("user");
    };

}

export default new AuthUser();