import { Flex, Box, Text, Card } from "rebass/styled-components";
import fetch from "../../../../service";
import useSWR from "swr";
import { useRouter } from "next/router";
// components
import Table from "../../../../components/Table";

const fetcher = url => fetch(url).then(r => r.json());

const CurrentPlayersTable = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/teams/${id}/players`, fetcher);

  if (!data) return <Box mb={4}>Loading...</Box>;

  function calcWinrate({ games_played, wins }) {
    return ((wins / games_played) * 100).toFixed(1);
  }

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
            {data
              .filter(t => t.is_current_team_member)
              .map((player, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Flex alignItems="center">
                        <img
                          style={{ marginRight: "10px" }}
                          width="35px"
                          height="35px"
                          src={`https://identicon-api.herokuapp.com/${player.name}/35?format=png`}
                          alt={player.name}
                        />
                        <Text>{player.name}</Text>
                      </Flex>
                    </td>
                    <td>
                      <Text>{player.games_played}</Text>
                    </td>
                    <td>
                      <Text>{calcWinrate(player)}</Text>
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

export default CurrentPlayersTable;
