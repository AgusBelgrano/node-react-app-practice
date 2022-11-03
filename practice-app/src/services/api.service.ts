import axios from "axios";
import { IFormValues } from "../components/register/Index";

const ApiService=() =>{
  const createUser = (data:IFormValues) =>{
    axios.post("http://localhost:3030", JSON.stringify(data)).then(res => console.log(res.data))
  }
  const getAll = () =>{
    axios.get("http://localhost:3030").then(res => console.log(res))
  }
  return{
    createUser, getAll
  }
}
export default ApiService;