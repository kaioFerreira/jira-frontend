import { useFormContext } from "react-hook-form";
import { ErrorMessageElement } from "./styles/errorMessage";

interface IErrorMessageProps {
  field: string
}


function get (obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
  String.prototype.split
    .call (path, regexp)
    .filter (Boolean)
    .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);

  const result = travel (/[,[\]]+?/) || travel(/[,[/].]+?/);

  return result
};

export function ErrorMessage({field} : IErrorMessageProps) {
  const { formState: { errors } } = useFormContext()

  const fieldError = get(errors, field)

  if(!fieldError) {
    return null
  }

  return (
    <ErrorMessageElement>{fieldError.message?.toString()}</ErrorMessageElement>
  )
}