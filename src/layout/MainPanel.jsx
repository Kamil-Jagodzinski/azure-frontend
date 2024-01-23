import { Box } from "@mui/material";
import { GitContext } from "../GitContext";
import { useContext } from "react";
import { RepositoryArea } from "../components/RespositoriesArea";
import { EmptyPanel } from "../components/EmptyPanel";

const MainPanel = () => {
  const { main, repositories } = useContext(GitContext);

  return (
    <Box
      sx={{
        height: "100%",
        py: 1,
        px: 1,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {main === "repos" ? (
        <RepositoryArea repos={repositories} />
      ) : (
        <EmptyPanel />
      )}
    </Box>
  );
};

export { MainPanel };
