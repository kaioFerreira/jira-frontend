import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { SelectElement } from "./styles/select";

interface ISelectOption {
  label: string,
  value: string
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string,
  options: ISelectOption[]
}

export function Select(props: ISelectProps) {
  const { register } = useFormContext()

  return (
    <SelectElement 
      id={props.name}
      {...register(props.name)} 
      {...props}
    >
      {props.options.map(option => (
        <option key={option.label} value={option.value}>{option.label}</option>
      ))}
    </SelectElement>
  )
}