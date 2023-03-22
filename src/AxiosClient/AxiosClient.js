import axios from "axios";
const AxiosClient = axios.create({
  baseURL: "https://blogapp-api-indol.vercel.app/api/v1",
});
export default AxiosClient;
