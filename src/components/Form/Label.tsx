import { LabelHTMLAttributes } from "react";
import { LabelElement } from "./styles/label";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: LabelProps) {
  return (
    <LabelElement {...props}/>
  )
}