import { Outlet } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Navbar } from "../Views/Components";

export default function MainLayout() {
  return (
    <VStack>
      <Navbar />
      <Outlet />
    </VStack>
  );
}
