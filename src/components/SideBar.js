import React from "react";
import { Box, List, ListItem, ListItemText, Button, Typography } from "@mui/material";

const SideBar = ({ chats, onNewChat, onSelectChat, activeChat }) => {
  return (
    <Box
      width="300px" // Fixed width
      p={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        height: "100vh",
        overflowY: "auto", // Add scrolling for long lists
        flexShrink: 0, // Prevent resizing
      }}
    >
      <div>
        <Typography variant="h5" gutterBottom>
          ChatLLM
        </Typography>
        <List>
          {chats.map((chat) => (
            <ListItem
              key={chat.id}
              button
              selected={chat.id === activeChat}
              onClick={() => onSelectChat(chat.id)}
              sx={{
                bgcolor: chat.id === activeChat ? "#333" : "transparent",
                borderRadius: "8px",
                "&:hover": { bgcolor: "#444" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <ListItemText primary={chat.name} />
            </ListItem>
          ))}
        </List>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={onNewChat}
        sx={{ mt: 2 }}
      >
        New Chat
      </Button>
    </Box>
  );
};

export default SideBar;
