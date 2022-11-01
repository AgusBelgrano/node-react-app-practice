import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues{
  "First Name": string,
  "Last Name": string,
  "Address": string,
  "Age": number
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