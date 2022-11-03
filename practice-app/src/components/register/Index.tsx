import { useForm, SubmitHandler } from "react-hook-form";
import "../styles/Register.css"
import "../styles/Input.css"
import Input from "../input/Index";
import ApiService from "../../services/api.service"
import { useEffect } from "react";
import { User } from "../../interfaces/user.interface";
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
  } = useForm<User>();


  const onSubmit: SubmitHandler<User> = data => {
    createUser(data)
  }
  const { getAll, createUser } = ApiService()

  useEffect(() => {
    getAll();
  },)

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input label="firstName" register={register} required/>
        <Input label="lastName" register={register} required/>
        <Input label="email" register={register} required/>
        <Input label="password" register={register} required/>
      <div className="buttonsContainer">
      </div>
        <button className="inputButton" type="submit">Registrarse</button>
      </form>
    </>
  )
};

export default Register;
