import fetch from "../../service";
import Head from "next/head";
import { Flex, Box } from "rebass/styled-components";
import { redirectToPage } from "../../utils";
import MatchesTable from "./components/MatchesTable";
import CurrentPlayersTable from "./components/CurrentPlayersTable";
import HeroesPlayedTable from "./components/HeroesPlayedTable";
import TeamInfoHeader from "./components/TeamInfoHeader";

const Team = ({ teamData, matches }) => {
  return (
    <>
      <Head>
        <title>{teamData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TeamInfoHeader
        logoUrl={teamData.logo_url}
        title={teamData.name}
        wins={teamData.wins}
        losses={teamData.losses}
        rating={teamData.rating.toFixed(0)}
      />
      <Flex mx={-2} flexWrap="wrap">
        <Box px={2} width={[1, 1, 1, "65%"]}>
          <MatchesTable items={matches} />
        </Box>
        <Box px={2} width={[1, 1, 1, "35%"]}>
          <Flex flexDirection="column">
            <CurrentPlayersTable />
            <HeroesPlayedTable />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

Team.getInitialProps = async ctx => {
  const { id } = ctx.query;

  try {
    const teamResponse = await fetch(`/teams/${id}`);
    const matchesResponse = await fetch(`/teams/${id}/matches`);

    if (!teamResponse.ok || !matchesResponse.ok) {
      return {
        teamData: {},
        matches: []
      };
    }

    const teamJson = await teamResponse.json();
    const matchesJson = await matchesResponse.json();

    return {
      teamData: teamJson,
      matches: matchesJson.slice(0, 20)
    };
  } catch (error) {
    return redirectToPage(ctx, "/error");
  }
};

export default Team;
