import { Flex, Box, Text } from "rebass/styled-components";

function Navbar() {
  return (
    <header>
      <Flex
        px={4}
        py={3}
        color="white"
        bg="rgb(25, 32, 35)"
        alignItems="center"
      >
        <Text fontWeight="500">
          Dota Teams
        </Text>
        <Box mx="auto" />
      </Flex>
    </header>
  );
}

export default Navbar;
