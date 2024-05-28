import { LabelHTMLAttributes } from "react";
import { LabelElement } from "./styles/label";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: ILabelProps) {
  return (
    <LabelElement {...props}/>
  )
}