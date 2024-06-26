import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { InputElement } from "./styles/input";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: IInputProps) {
  const { register } = useFormContext()

  return (
    <InputElement 
      id={props.name}
      {...register(props.name)} 
      {...props}
    />
  )
}