import { useContext } from "react";
import { EmptyPanel } from "../components/EmptyPanel";
import { UsersList } from "../components/UsersList";
import { UserCard } from "../components/UserCard";
import { Box } from "@mui/material";
import { GitContext } from "../GitContext";
import { FollowingList } from "../components/FollowingList";

const UpperPanel = () => {
  const { upper, users, selectedUser, followingList } = useContext(GitContext);

  return (
    <Box
      sx={{
        minHeight: "35%",
        maxHeight: "50%",
        py: 1,
        px: 1,
        boxSizing: "border-box",
        overflow: "auto",
        width: "100%",
      }}
    >
      {upper === "list" ? (
        <UsersList userlist={users} />
      ) : upper === "following" ? (
        <FollowingList userlist={followingList} />
      ) : upper === "card" ? (
        <UserCard user={selectedUser} />
      ) : (
        <EmptyPanel />
      )}
    </Box>
  );
};

export { UpperPanel };
