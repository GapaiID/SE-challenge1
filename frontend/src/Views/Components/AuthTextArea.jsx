import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

export default function AuthTextArea({ placeholder, label, name, func }) {
  return (
    <FormControl>
      <FormLabel fontWeight="1px" fontStyle="normal" color="gray.700">
        {label}
      </FormLabel>
      <Textarea onChange={func} name={name} placeholder={placeholder} />
    </FormControl>
  );
}
