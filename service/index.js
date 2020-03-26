import * as unfetch from "isomorphic-unfetch";

function fetch(uri) {
  return unfetch(`https://api.opendota.com/api${uri}`);
}

export default fetch;
