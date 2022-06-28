import axios from "axios";
const APIURL = "https://api.github.com/users/";

export async function getUser(username) {
  try {
  } catch (err) {
    if (err.response.status == 404) {
      return { err: "No profile with this username", status: "error" };
    }
  }
}

export async function getRepos(username) {
  try {
  } catch (err) {
    return { err: "Problem fetching repos", status: "error" };
  }
}
