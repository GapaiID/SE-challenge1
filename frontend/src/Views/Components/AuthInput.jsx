import { Input } from "@chakra-ui/react";

export default function AuthInput({ text, type, name, func }) {
  return (
    <Input
      name={name}
      borderRadius="2px"
      placeholder={text}
      type={type}
      onChange={func}
    />
  );
}
