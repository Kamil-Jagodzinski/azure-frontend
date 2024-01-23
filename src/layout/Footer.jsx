import { Paper, Link } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{
        px: 3,
        borderRadius: 0,
        borderWidth: "4px 0 0 0",
        height: "2.5rem",
        width: "100%",
        boxSizing: "border-box",
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      variant="outlined"
    >
      <Link
        href="https://github.com/Kamil-Jagodzinski/github-api"
        target="_blank"
        underline="hover"
        color="white"
      >
        {" "}
        Source code{" "}
      </Link>

      <Link
        variant="body1"
        href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
        target="_blank"
        underline="hover"
        color="white"
      >
        {" "}
        About Github API{" "}
      </Link>
    </Paper>
  );
};

export { Footer };
