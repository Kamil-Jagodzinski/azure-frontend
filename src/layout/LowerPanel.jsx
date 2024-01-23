import { Box } from "@mui/material";
import { GitContext } from "../GitContext";
import { useContext } from "react";
import { EmptyPanel } from "../components/EmptyPanel";
import { ReadmeView } from "../components/ReadmeView";

const LowerPanel = () => {
  const { lower, selectedRepo } = useContext(GitContext);

  return (
    <Box
      sx={{
        py: 1,
        px: 1,
        boxSizing: "border-box",
        overflow: "auto",
        height: "100%",
      }}
    >
      {lower === "readme" ? (
        <ReadmeView repo={selectedRepo} />
      ) : (
          <EmptyPanel />
          
      )}
    </Box>
  );
};

export { LowerPanel };
