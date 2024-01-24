import axios from "axios";
import { getReadme } from "../api/githubAPI";

jest.mock("axios");

describe("GitHub API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getReadme", () => {
    it("Expect null due to error", async () => {
      const user = "username";
      const repo = "repo";
      const consoleIgnor = jest.spyOn(console, "log").mockImplementation();
      axios.get.mockRejectedValueOnce(new Error("API error"));
      const result = await getReadme(user, repo);
      expect(result).toBeNull();
      consoleIgnor.mockRestore();
    });
  });
});