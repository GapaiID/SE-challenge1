import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import SearchLogo from "./SearchLogo";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(() => e.target.value);
  };

  const searchQuery = (e) => {
    e.preventDefault();
    try {
      console.log(query);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <InputGroup as="form" onSubmit={searchQuery}>
      <Input onChange={handleChange} />
      <Box as="button" type="submit">
        <InputRightAddon>
          <SearchLogo />
        </InputRightAddon>
      </Box>
    </InputGroup>
  );
}
