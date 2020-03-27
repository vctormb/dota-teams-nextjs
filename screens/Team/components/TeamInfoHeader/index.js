import PropTypes from "prop-types";
import { Flex, Box, Text } from "rebass/styled-components";

function TeamInfoHeader({ logoUrl, title, wins, losses, rating }) {
  return (
    <Flex mb={4}>
      <Box mr={4}>
        <img src={logoUrl} alt="Team" width="124px" height="124px" />
      </Box>
      <Flex flexDirection="column">
        <Box mb={3}>
          <Text fontSize={5}>{title}</Text>
        </Box>
        <Flex>
          <Flex flexDirection="column" mr={3}>
            <Text fontSize={1} color="whiteopaque">
              WINS
            </Text>
            <Text fontSize={4} color="green">
              {wins}
            </Text>
          </Flex>
          <Flex flexDirection="column" mr={3}>
            <Text fontSize={1} color="whiteopaque">
              LOSSES
            </Text>
            <Text fontSize={4} color="red">
              {losses}
            </Text>
          </Flex>
          <Flex flexDirection="column" mr={3}>
            <Text fontSize={1} color="whiteopaque">
              RATING
            </Text>
            <Text fontSize={4}>{rating}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

TeamInfoHeader.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  losses: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired
};

export default TeamInfoHeader;
