import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues{
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

const Input = ({label, register, required}: InputProps)=>(
  <>
  <label>{label}</label>
  <input {...register(label, {required})}/>
  </>
)

export default Input;