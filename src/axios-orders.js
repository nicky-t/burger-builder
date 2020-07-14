import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-25d66.firebaseio.com/",
});

export default instance;
