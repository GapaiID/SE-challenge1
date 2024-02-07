import { FormControl, FormLabel } from "@chakra-ui/react";
import AuthInput from "./AuthInput";

export default function AuthFormControl({
  label,
  placeholder,
  type = "text",
  name,
  func,
}) {
  return (
    <FormControl>
      <FormLabel fontWeight="1px" fontStyle="normal" color="gray.700">
        {label}
      </FormLabel>
      <AuthInput name={name} func={func} text={placeholder} type={type} />
    </FormControl>
  );
}
