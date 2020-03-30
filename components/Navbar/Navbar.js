import Link from "next/link";
import styled from 'styled-components';
import { Flex, Box, Text } from "rebass/styled-components";

const Nav = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
`;

function Navbar() {
  return (
    <Nav as="header" height="56px">
      <Flex
        px={4}
        py={3}
        color="white"
        bg="rgb(25, 32, 35)"
        alignItems="center"
      >
        <Text fontWeight="500">
          <Link href="/">
            <a>Dota Teams</a>
          </Link>
        </Text>
        <Box mx="auto" />
      </Flex>
    </Nav>
  );
}

export default Navbar;
