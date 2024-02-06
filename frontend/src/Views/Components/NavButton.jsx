import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavButton({ text, route }) {
  return (
    <Link to={route}>
      <Button colorScheme={"gray"} textColor="gray.600">
        {text}
      </Button>
    </Link>
  );
}
