import * as unfetch from "isomorphic-unfetch";
import { BASE_URL } from "../constants";

function fetch(uri) {
  return unfetch(`${BASE_URL}${uri}`);
}

export default fetch;
