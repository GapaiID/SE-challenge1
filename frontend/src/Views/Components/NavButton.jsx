import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavButton({ text, route, func }) {
  return (
    <Link to={route}>
      <Button colorScheme={"gray"} textColor="gray.600" onClick={func}>
        {text}
      </Button>
    </Link>
  );
}
