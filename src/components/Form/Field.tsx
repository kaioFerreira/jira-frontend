import { HTMLAttributes } from "react";
import { FieldElement } from "./styles/field";

interface IFieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Field(props: IFieldProps) {
  return (
    <FieldElement {...props}/>
  )
}