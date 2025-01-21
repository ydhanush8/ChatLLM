import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import SideBar from "./components/SideBar";
import ChatWindow from "./components/ChatWindow";
import { Box } from "@mui/material";

const App = () => {
  const [chats, setChats] = useState([{ id: 1, name: "Chat 1", messages: [] }]);
  const [activeChat, setActiveChat] = useState(1);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#1d1d1d",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });

  const handleNewChat = () => {
    const newChat = {
      id: chats.length + 1,
      name: `Chat ${chats.length + 1}`,
      messages: [],
    };
    setChats([...chats, newChat]);
    setActiveChat(newChat.id);
  };

  const handleSelectChat = (id) => {
    setActiveChat(id);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display="flex" height="100vh">
        <SideBar
          chats={chats}
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          activeChat={activeChat}
        />
        <ChatWindow
          activeChat={chats.find((chat) => chat.id === activeChat)}
          updateChat={(updatedMessages) => {
            setChats(
              chats.map((chat) =>
                chat.id === activeChat ? { ...chat, messages: updatedMessages } : chat
              )
            );
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
