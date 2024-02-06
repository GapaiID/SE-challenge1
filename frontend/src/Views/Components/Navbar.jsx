import { ButtonGroup } from "@chakra-ui/button";
import { Flex, HStack } from "@chakra-ui/layout";
import { Logo } from ".";
import SearchBar from "./SearchBar";
import NavButton from "./NavButton";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigator = useNavigate();

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
      </HStack>
    </Flex>
  );
}
