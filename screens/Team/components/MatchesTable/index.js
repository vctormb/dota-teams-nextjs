import PropTypes from "prop-types";
import { Flex, Box, Text, Card } from "rebass/styled-components";
import Table from "../../../../components/Table";
import { secondsToMinAndSec } from '../../../../utils';

const MatchesTable = ({ items }) => {
  return (
    <Box mb={4}>
      <Box mb={1}>
        <Text letterSpacing="1px" fontWeight="500" fontSize={1}>
          Recent Matches
        </Text>
      </Box>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>duration</th>
              <th>result</th>
              <th>opposing team</th>
            </tr>
          </thead>
          <tbody>
            {items.map((match, i) => {
              const isWinner = !match.radiant_win && !match.radiant;

              return (
                <tr key={i}>
                  <td>
                    <Text>{match.match_id}</Text>
                  </td>
                  <td>
                    <Text>{secondsToMinAndSec(match.duration)}</Text>
                  </td>
                  <td>
                    <Text color={isWinner ? "green" : "red"}>
                      {isWinner ? "Won Match" : "Lost Match"}
                    </Text>
                  </td>
                  <td>
                    <Flex alignItems="center">
                      <img
                        style={{ marginRight: "10px" }}
                        width="35px"
                        height="35px"
                        src={match.opposing_team_logo}
                        alt={match.opposing_team_logo ? match.opposing_team_name : ""}
                      />
                      <Text>{match.opposing_team_name}</Text>
                    </Flex>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </Box>
  );
};

MatchesTable.propTypes = {
  items: PropTypes.array.isRequired
};

export default MatchesTable;
