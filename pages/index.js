import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Flex, Box, Card } from "rebass/styled-components";
import Table from "../components/Table";
import mock from "../service/mock.json";

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

Home.getInitialProps = async () => {
  try {
    // const response = await fetch("/service/mock.json");
    // console.log(response);

    return { items: mock };
  } catch (error) {
    console.log("ERROR:", error);
    return {};
  }
};

export default Home;
