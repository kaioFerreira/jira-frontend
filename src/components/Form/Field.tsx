import { HTMLAttributes } from "react";
import { FieldElement } from "./styles/field";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Field(props: FieldProps) {
  return (
    <FieldElement {...props}/>
  )
}