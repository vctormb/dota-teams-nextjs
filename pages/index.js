import Head from "next/head";
import Link from "next/link";
import { Flex, Box, Card } from "rebass/styled-components";
import Table from "../components/Table";
import fetch from "../service";
import { redirectToPage } from "../utils";

const Home = ({ items }) => (
  <Box mx={4}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Card>
      <Table>
        <thead>
          <tr>
            <th>rank</th>
            <th>name</th>
            <th>rating</th>
            <th>wins</th>
            <th>losses</th>
          </tr>
        </thead>
        <tbody>
          {items.map((team, i) => (
            <tr key={i}>
              <td>{i + 1}.</td>
              <td>
                <Flex alignItems="center">
                  <img
                    style={{ marginRight: "10px" }}
                    width="50px"
                    height="50px"
                    src={team.logo_url}
                    alt={team.name}
                  />
                  <Link href={`team/${team.team_id}`}>
                    <a>{team.name}</a>
                  </Link>
                </Flex>
              </td>
              <td>{team.rating.toFixed(0)}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  </Box>
);

Home.getInitialProps = async ctx => {
  try {
    const response = await fetch("/teams");

    if (!response.ok) {
      return { items: [] };
    }

    const json = await response.json();

    return { items: json.filter(team => team.name).slice(0, 100) };
  } catch (error) {
    return redirectToPage(ctx, "/error");
  }
};

export default Home;
