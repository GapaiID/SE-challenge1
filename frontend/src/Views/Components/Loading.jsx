import { CircularProgress, Container } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Container w="100%">
      <CircularProgress isIndeterminate color="blue.300" />
    </Container>
  );
}
