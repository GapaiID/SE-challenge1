import { Button } from "@chakra-ui/react";

export default function AuthButton({ text, func }) {
  return (
    <Button
      bg="gray.50"
      _hover={{
        bg: "gray.800",
        color: "gray.50",
        boxShadow: "dark-lg",
      }}
      w="100%"
      onClick={func}
      type="submit"
    >
      {text}
    </Button>
  );
}
