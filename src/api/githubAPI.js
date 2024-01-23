import axios from "axios";

const BASE_URL = `http://localhost:8080/api/github`;

const searchUsers = async (query) => {
  try {
    const response = await axios.get(BASE_URL + `/users/search/${query}`);
    const users = response.data.map((user) => ({
      login: user.login,
      url: user.url,
      avatar: user.avatar,
    }));

    console.log(users);

    return users;
  } catch (error) {
    alert(error);
  }
  return null;
};

const loadRepositories = async (user) => {
  console.log("loading repos");

  try {
    const response = await axios.get(BASE_URL + `/users/${user}/repos`);

    const repositoriesWithMetrics = response.data.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      lang: repo.language,
      stargazers: repo.stargazers_count,
      watchers: repo.watchers_count,
      forks: repo.forks_count,
      openIssues: repo.open_issues_count,
    }));

    return repositoriesWithMetrics;
  } catch (error) {
    alert(error);
  }
  return null;
};

const getReadme = async (user, repo) => {
  try {
    console.log(BASE_URL + `repos/${user}/${repo}/readme`);
    const response = await axios.get(
      BASE_URL + `/repos/${user}/${repo}/readme`);
    const contentBase64 = response.data;
    if (contentBase64 === "") {
      return null;
    }
    const decodedContent = atob(contentBase64);
    const outReadme = decodeURIComponent(decodedContent);
    return outReadme;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const selectUser = async (user) => {
  try {
    const response = await axios.get(BASE_URL + `/users/${user}`);
    const userData = response.data;

    console.log(userData);

    const userMetrics = {
      avatar_url: userData.avatarUrl,
      login: userData.login,
      name: userData.name,
      html_url: userData.htmlUrl,
      bio: userData.bio,
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.publicRepos,
      updated_at: userData.updatedAt,
    };

    return userMetrics;
  } catch (error) {
    alert(error);
  }
  return null;
};

export { searchUsers, loadRepositories, getReadme, selectUser };
