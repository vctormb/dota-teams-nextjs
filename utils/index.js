import Router from "next/router";

export function redirectToPage(ctx, url) {
  if (typeof window !== "undefined") {
    return Router.push(url);
  }

  ctx.res.writeHead(302, { Location: url });

  return ctx.res.end();
}

export function secondsToMinAndSec(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec - minutes * 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function calcWinrate({ games_played, wins }) {
  return ((wins / games_played) * 100).toFixed(1);
}
