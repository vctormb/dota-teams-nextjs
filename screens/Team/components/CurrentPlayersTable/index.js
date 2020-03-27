import { Flex, Box, Text, Card } from "rebass/styled-components";
import Table from "../../../../components/Table";

const CurrentPlayersTable = () => {
  return (
    <Box mb={4}>
      <Box mb={1}>
        <Text letterSpacing="1px" fontSize={1} fontWeight="500">
          Current Players
        </Text>
      </Box>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>games</th>
              <th>winrate</th>
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1, 1].map((team, i) => (
              <tr key={i}>
                <td>
                  <Flex alignItems="center">
                    <img
                      style={{ marginRight: "10px" }}
                      width="35px"
                      height="35px"
                      src="https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2163.png"
                      alt="Liquid"
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

export default CurrentPlayersTable;
