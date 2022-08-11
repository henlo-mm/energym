import axios from "axios";

export default axios.create({
 // baseURL: "https://energym-point-prod.herokuapp.com/api",
 baseURL: "http://localhost:5000/api",
  headers: {
    "Content-type": "application/json"
  }
});