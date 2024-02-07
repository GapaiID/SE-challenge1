import { Tag, TagLabel } from "@chakra-ui/react";

export default function DetailTag({ text }) {
  return (
    <Tag variant="solid" colorScheme="blue" w="fit-content">
      <TagLabel>{text}</TagLabel>
    </Tag>
  );
}
