import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { Logo } from ".";
import SearchBar from "./SearchBar";
import SearchLogo from "./SearchLogo";

export default function Navbar() {
  return (
    <Flex>
      <HStack
        width="full"
        justifyContent="space-between"
        position="sticky"
        top={0}
        bg="white"
        paddingY="1rem"
        gap={"4rem"}
      >
        <Logo />
        <ButtonGroup
          variant={"ghost"}
          spacing="1rem"
          flexDirection="row"
          flex={true}
          paddingX="1rem"
          justifyContent="center"
        >
          <Button colorScheme={"gray"} textColor="gray.600">
            Home
          </Button>
          <Button colorScheme={"gray"} textColor="gray.600">
            Home
          </Button>
          <Button colorScheme={"gray"} textColor="gray.600">
            Home
          </Button>
        </ButtonGroup>
        <Flex gap={"1rem"}>
          <SearchBar />
          <div>swc</div>
        </Flex>
      </HStack>
    </Flex>
  );
}
