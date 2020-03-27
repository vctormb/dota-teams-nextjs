const theme = {
  breakpoints: [
    "40em", // 640px
    "52em", // 832px
    "64em" // 1024px
  ],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    white: "#eeeeee",
    whiteopaque: "rgba(255, 255, 255, 0.6)",
    blue: "#222d4a",
    darkblue: "#162329",
    lightblue: "#66bbff",
    green: "#66bb6a",
    red: "#ff4c4c"
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

export default theme;
