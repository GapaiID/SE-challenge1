import { Box } from "@chakra-ui/react";

export default function AuthCard({ children }) {
  return (
    <Box
      border="2px"
      borderRadius="4px"
      borderColor="gray.600"
      padding="1.2rem"
      margin="auto"
      marginTop="4rem"
      rowGap="3rem"
      display="flex"
      flexDir="column"
      w="100%"
      paddingTop="2.5rem"
      alignItems="center"
      bg="white"
      _focusWithin={{
        boxShadow: "dark-lg",
        transitionDuration: 1000,
        transitionBehavior: "linear",
      }}
      minWidth="xs"
    >
      {children}
    </Box>
  );
}
