import { Flex, Box, Text, Card } from "rebass/styled-components";
import fetch from "../../../../service";
import useSWR from "swr";
import { useRouter } from "next/router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// components
import Table from "../../../../components/Table";
// utils
import { calcWinrate } from "../../../../utils";
// css
import theme from "../../../../css/theme";

const fetcher = url => fetch(url).then(r => r.json());

const HeroesPlayedTable = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/teams/${id}/heroes`, fetcher);

  function toUnderscoreCase(name) {
    return name
      .split(" ")
      .join("_")
      .toLowerCase();
  }

  if (!data) {
    return (
      <Box mb={4}>
        <SkeletonTheme
          highlightColor={theme.colors.purple}
          color={theme.colors.lightPurple}
        >
          <Skeleton count={5} />
        </SkeletonTheme>
      </Box>
    );
  }

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
            {data.slice(0, 10).map((hero, i) => (
              <tr key={i}>
                <td>
                  <Flex alignItems="center">
                    <img
                      style={{ marginRight: "10px" }}
                      src={`https://api.opendota.com/apps/dota2/images/heroes/${toUnderscoreCase(
                        hero.localized_name
                      )}_sb.png`}
                      alt={hero.localized_name}
                    />
                    <Text>{hero.localized_name}</Text>
                  </Flex>
                </td>
                <td>
                  <Text>{hero.games_played}</Text>
                </td>
                <td>
                  <Text>{calcWinrate(hero)}</Text>
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
