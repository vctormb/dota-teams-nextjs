import App from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Box } from "rebass/styled-components";
// components
import Navbar from "../components/Navbar";
// css
import theme from "../css/theme";

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.blue};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Navbar>Header</Navbar>
          <Box my={4} mx="auto" maxWidth="1200px">
            <Box mx={4}>
              <main>
                <Component {...pageProps} />
              </main>
            </Box>
          </Box>
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
