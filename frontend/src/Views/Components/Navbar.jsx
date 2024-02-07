import { ButtonGroup, Button } from "@chakra-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Flex, HStack } from "@chakra-ui/layout";
import { Logo } from ".";
import SearchBar from "./SearchBar";
import NavButton from "./NavButton";
import { Link, useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

export default function Navbar() {
  const navigator = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const burgerRef = useRef();

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.clear();

    navigator("/auth");
  };
  return (
    <Flex
      zIndex={10}
      position="sticky"
      top={0}
      width={"100vw"}
      bg="white"
      justifyContent={"center"}
    >
      <HStack
        width="60vw"
        justifyContent="space-between"
        paddingY="1rem"
        gap={"4rem"}
      >
        <Link to="/">
          <Logo />
        </Link>
        <Flex display={{ base: "none", md: "flex" }}>
          <ButtonGroup
            variant={"ghost"}
            spacing="1rem"
            flexDirection="row"
            flex={true}
            paddingX="1rem"
            justifyContent="center"
          >
            <NavButton text="Tags" route="#" />
            <NavButton text="Profile" route="#" />
          </ButtonGroup>
          <Flex gap={"1rem"}>
            <SearchBar />
            <NavButton text="Logout" func={handleLogout} />
          </Flex>
        </Flex>

        <Flex display={{ base: "flex", md: "none" }}>
          <Button ref={burgerRef} colorScheme="teal" onClick={onOpen}>
            Menu
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={burgerRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody
                rowGap="1rem"
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <SearchBar />

                <NavButton text="Tags" route="#" />
                <NavButton text="Profile" route="#" />
              </DrawerBody>

              <DrawerFooter>
                <NavButton text="Logout" func={handleLogout} />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </HStack>
    </Flex>
  );
}
