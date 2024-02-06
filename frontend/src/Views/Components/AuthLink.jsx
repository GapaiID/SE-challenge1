import { Box, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export default function AuthLink({ route, text }) {
  return (
    <Box display="flex" justifyContent="end">
      <RouteLink to={route}>
        <Link
          color="gray.800"
          _hover={{
            textColor: "blue.700",
          }}
          fontSize="0.8rem"
        >
          {text}
        </Link>
      </RouteLink>
    </Box>
  );
}
