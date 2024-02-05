import { Outlet } from "react-router-dom";
import {
  Container,
  ButtonGroup,
  Button,
  Flex,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Navbar } from "../Views/Components";

export default function MainLayout() {
  return (
    <VStack>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </VStack>
  );
}
