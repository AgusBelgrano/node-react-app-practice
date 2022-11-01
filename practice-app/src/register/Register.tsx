import {  useForm, SubmitHandler} from "react-hook-form";
import Input from "../input/Input"
import "../styles/Register.css"
import "../styles/Input.css"

interface IFormValues{
  "First Name": string,
  "Last Name": string,
  "Address": string,
  "Age": number
}

const Register = () => {
  const {
    register,
    handleSubmit,
  } = useForm<IFormValues>();
  
  //Alerta que marca los datos ingresados
  const onSubmit: SubmitHandler<IFormValues> = data =>{
    alert(JSON.stringify(data))
  }
  
  return(
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required/>
      <Input label="Last Name" register={register} required/>
      <Input label="Address" register={register} required/>
      <Input label="Age" register={register} required/>
      <input type="submit" />
    </form>
  )
};

export default Register;
