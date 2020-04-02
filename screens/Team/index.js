import styled from "styled-components";
import fetch from "../../service";
import Head from "next/head";
import { useRouter } from "next/router";
import { Flex, Box } from "rebass/styled-components";
import { redirectToPage } from "../../utils";
// components
import SkeletonScreen from "./components/SkeletonScreen";
import MatchesTable from "./components/MatchesTable";
import CurrentPlayersTable from "./components/CurrentPlayersTable";
import HeroesPlayedTable from "./components/HeroesPlayedTable";
import TeamInfoHeader from "./components/TeamInfoHeader";

const SkeletonTableRow = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: 6px;
`;

const Team = ({ teamData, matches }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <SkeletonScreen />;
  }

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

export async function getStaticPaths() {
  try {
    const response = await fetch("/teams");

    if (!response.ok) {
      return {
        paths: [],
        fallback: true
      };
    }

    const json = await response.json();

    const teams = json.filter(team => team.name).slice(0, 20);
    const paths = teams.map(team => ({
      params: { id: String(team.team_id) }
    }));

    return {
      paths,
      fallback: true
    };
  } catch (error) {
    return {
      paths: [],
      fallback: true
    };
  }
}

export async function getStaticProps(ctx) {
  const { id } = ctx.params;

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
      revalidate: 300,
      props: {
        teamData: teamJson,
        matches: matchesJson.slice(0, 20)
      }
    };
  } catch (error) {
    return redirectToPage(ctx, "/error");
  }
}

export default Team;
