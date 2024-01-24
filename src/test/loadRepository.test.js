import axios from "axios";
import { loadRepositories } from "../api/githubAPI";

jest.mock("axios");

describe("loadRepositories", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Expect repositories metrics", async () => {
    const user = "username";
    const alertIgnor = jest.spyOn(window, "alert").mockImplementation();
    const repositories = [
      {
        name: "repo1",
        html_url: "https://github.com/user/repo1",
        language: "JavaScript",
      },
      {
        name: "repo2",
        html_url: "https://github.com/user/repo2",
        language: "Python",
      },
    ];

    axios.get.mockResolvedValueOnce({ data: repositories });

    const expectedRepositories = [
      {
        name: "repo1",
        url: "https://github.com/user/repo1",
        lang: "JavaScript",
      },
      {
        name: "repo2",
        url: "https://github.com/user/repo2",
        lang: "Python",
      },
    ];

    const result = await loadRepositories(user);

    expect(result).toEqual(expectedRepositories);
    expect(axios.get).toHaveBeenCalledWith(
      `https://kj-project-backend.azurewebsites.net/api/github/users/${user}/repos`
    );
    alertIgnor.mockRestore();
  });

  it("Expect null due to error", async () => {
    const user = "username";
    const alertIgnor = jest.spyOn(window, "alert").mockImplementation();
    axios.get.mockRejectedValueOnce(new Error("API error"));
    const result = await loadRepositories(user);
    expect(result).toBeNull();
    alertIgnor.mockRestore();
  });
});