import {  useForm, SubmitHandler} from "react-hook-form";
import Input from "../input/Index"
import "./Register.css"
import "../input/Input.css"
import ApiService from "../../services/api.service"

export interface IFormValues{
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
  } = useForm<IFormValues>();

  
  const onSubmit: SubmitHandler<IFormValues> = data =>{
    createUser(data)
  }
  const {getAll, createUser} = ApiService()
  
  return(
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input label="firstName" register={register} required/>
        <Input label="lastName" register={register} required/>
        <Input label="email" register={register} required/>
        <Input label="password" register={register} required/>
      <div className="buttonsContainer">
        <input className="inputButton" type="submit" />
        <button className="inputButton" onClick={getAll}> Get all </button>
      </div>
      </form>
    </>
  )
};

export default Register;
