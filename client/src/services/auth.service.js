import http from "../http-common";
class AuthUser {

    create(data) {
        return http.post("/auth/signup", data);
    }

    login (data) {
        return http.post("/auth/signin", data)
        /* .then((response) => {
                console.log(response.data.token)
            if (response.data.token) {
                localStorage.setItem("token", JSON.stringify(response.data));
            }
        return response.data;
        }); */
    };

    logout  () {
        
        localStorage.removeItem("token");
    };
    getCurrentUser () {
        const userStr = localStorage.getItem("token");
        
       /*  if (userStr){
            return userStr;

        }else {
            return null;
        }
       */
        
    };

}

export default new AuthUser();