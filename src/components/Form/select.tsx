import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { SelectElement } from "./styles/select";

interface SelectOption {
  label: string,
  value: number
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string,
  options: SelectOption[]
}

export function Select(props: SelectProps) {
  const { register } = useFormContext()

  return (
    <SelectElement 
      id={props.name}
      {...register(props.name)} 
      {...props}
    >
      {props.options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </SelectElement>
  )
}