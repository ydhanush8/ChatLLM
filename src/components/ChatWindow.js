import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";

const ChatWindow = ({ activeChat, updateChat }) => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText) return;

    const userMessage = { sender: "User", text: inputText };
    const updatedMessages = [...activeChat.messages, userMessage];
    updateChat(updatedMessages);

    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API}`,
        {
          contents: [{ parts: [{ text: inputText }] }],
        }
      );

      const botMessage = {
        sender: "Gemini",
        text: response.data.candidates[0].content.parts[0].text,
      };

      // Add bot message with typing effect
      await addTypingEffect(botMessage, updatedMessages);
    } catch (error) {
      updateChat([
        ...updatedMessages,
        { sender: "Gemini", text: "Error generating response." },
      ]);
    } finally {
      setLoading(false);
      setInputText("");
    }
  };

  const addTypingEffect = async (botMessage, updatedMessages) => {
    let currentText = "";
      for (let i = 0; i < botMessage.text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 10)); 
        currentText += botMessage.text[i];
        updateChat([
          ...updatedMessages,
          { sender: "Gemini", text: currentText },
        ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box flexGrow={1} display="flex" flexDirection="column" height="100vh" p={3}>
      <Typography variant="h6" gutterBottom>
        {activeChat.name}
      </Typography>
      <Paper
        elevation={2}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 2,
          mb: 2,
          bgcolor: "background.paper",
        }}
      >
        {activeChat.messages.map((message, index) => (
          <Box key={index} textAlign="left" mb={2}>
            <Typography
              variant="body1"
              sx={{
                display: "inline-block",
                p: 1,
                borderRadius: "8px",
                maxWidth: "80%",
                wordWrap: "break-word",
                bgcolor: message.sender === "User" ? "#1e88e5" : "#43a047",
                color: "#fff",
              }}
            >
              {message.text}
            </Typography>
          </Box>
        ))}
      </Paper>
      <Box display="flex">
        <TextField
          fullWidth
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="outlined"
          disabled={loading}
          sx={{
            bgcolor: "background.paper",
            input: { color: "text.primary" },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          disabled={loading}
          sx={{ ml: 2 }}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
