import { Flex, Box, Text, Card } from "rebass/styled-components";
import Table from "../../../../components/Table";

const HeroesPlayedTable = () => {
  return (
    <Box mb={4}>
      <Box mb={1}>
        <Text letterSpacing="1px" fontSize={1} fontWeight="500">
          Heroes Played
        </Text>
      </Box>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>hero</th>
              <th>games</th>
              <th>winrate</th>
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1, 1].map((hero, i) => (
              <tr key={i}>
                <td>
                  <Flex alignItems="center">
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://api.opendota.com/apps/dota2/images/heroes/earth_spirit_sb.png"
                      alt="Hero"
                    />
                    <Text>Topson</Text>
                  </Flex>
                </td>
                <td>
                  <Text>334</Text>
                </td>
                <td>
                  <Text>23.5</Text>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Box>
  );
};

export default HeroesPlayedTable;
