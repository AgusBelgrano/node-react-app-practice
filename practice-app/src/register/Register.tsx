import {  useForm, SubmitHandler} from "react-hook-form";
import Input from "../input/Input"
import "../styles/Register.css"
import "../styles/Input.css"
import ApiService from "../services/api.service"

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

  const {getAll, createUser} = ApiService()
  
  //Alerta que marca los datos ingresados
  const onSubmit: SubmitHandler<IFormValues> = data =>{
    // alert(JSON.stringify(data))
    createUser(data)
  }
  
  return(
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input label="firstName" register={register} required/>
        <Input label="lastName" register={register} required/>
        <Input label="email" register={register} required/>
        <Input label="password" register={register} required/>
        <input type="submit" />
      </form>
      <button onClick={getAll}> Get all </button>
    </>
  )
};

export default Register;
