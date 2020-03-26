import App from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// components
import Navbar from "../components/Navbar";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    white: "#eeeeee",
    whiteopaque: "rgba(255, 255, 255, 0.6)",
    blue: "#222d4a",
    darkblue: "#162329",
    lightblue: "#66bbff"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    medium: "0 3px 11px rgba(0, 0, 0, .2)"
  },
  variants: {
    card: {
      bg: "rgba(255, 255, 255, 0.04)",
      boxShadow: "medium"
    }
  },
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary"
    }
  }
};

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
          <main style={{ margin: "32px 0" }}>
            <Component {...pageProps} />
          </main>
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
