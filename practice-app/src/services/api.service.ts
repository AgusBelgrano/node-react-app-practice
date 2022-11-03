import axios from "axios";
import { User } from "../interfaces/user.interface";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

const ApiService = () => {

  const getAll = async () => {
    const res = await axiosInstance.get('/users');
    console.log(res.data);
  }

  const createUser = async (user: User) => {
    const res = await axiosInstance.post('/users', user);
    console.log(res.data);
  }

  return {
    createUser, 
    getAll
  }
}
export default ApiService;