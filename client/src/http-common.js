import axios from "axios";

export default axios.create({
  baseURL: "https://energym-point-prod.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});