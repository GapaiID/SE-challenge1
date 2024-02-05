import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import SearchLogo from "./SearchLogo";

export default function SearchBar() {
  return (
    <InputGroup>
      <Input />
      <InputRightAddon>
        <SearchLogo />
      </InputRightAddon>
    </InputGroup>
  );
}
