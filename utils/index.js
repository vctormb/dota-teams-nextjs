import Router from "next/router";

export function redirectToPage(ctx, url) {
  if (typeof window !== "undefined") {
    return Router.push(url);
  }

  ctx.res.writeHead(302, { Location: url });

  return ctx.res.end();
}
