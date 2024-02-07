import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MainLogo from "../Views/Components/MainLogo";

export default function AuthLayout() {
  return (
    <Container
      h="fit-content"
      justifyContent="center"
      display="flex"
      padding="5%"
      flexDir="column"
      bg="gray.20"
    >
      <Box display="flex" w="fit-content">
        <MainLogo />
      </Box>
      <Outlet />
    </Container>
  );
}
