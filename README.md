# ChatLLM App

A conversational AI platform built using React and Material-UI, leveraging the power of the ChatLLM model for generating responses. This application features real-time conversations with a responsive and clean UI, offering a seamless chat experience.

---

## Features

- **Responsive Chat Interface**: Real-time messages with typing animation for a natural experience.
- **Left Sidebar for Chat Organization**: Easily navigate between different chats.
- **Dynamic Typing Effect**: Bot messages appear character by character for better immersion.
- **Message Styling**: Differentiates user and bot messages with distinct colors.

---

## Tech Stack

- **Frontend**: React, Material-UI
- **API**: ChatLLM model via Google Generative Language API
- **Styling**: Material-UI and custom CSS for responsive design

---

## Installation and Setup

1. Clone the repository:

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_GEMINI_API=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual API key for the ChatLLM model.

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## How to Use

1. **New Chat**: Click the "New Chat" button on the left sidebar to start a new conversation.
2. **Send a Message**: Type your message in the input box at the bottom and press Enter or click "Send".
3. **View Responses**: The ChatLLM bot will respond with a typing animation for a better experience.
4. **Switch Chats**: Navigate between different chats using the sidebar.


---

## Environment Variables

| Variable Name            | Description                          |
|--------------------------|--------------------------------------|
| `REACT_APP_GEMINI_API`  | API key for accessing ChatLLM model  |

---

## Known Issues

- **API Limits**: Ensure you stay within the free-tier limits (e.g., 15 requests per minute). Exceeding the limit may result in errors.
- **Typing Animation**: Typing effect might cause slight delays for longer responses.

---

## Future Enhancements

- **Chat History Persistence**: Save chat histories for future reference.
- **User Authentication**: Allow users to log in and manage their chat sessions.
- **Rich Media Support**: Enable sharing of images, links, and other media.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Acknowledgments

- [Material-UI](https://mui.com/) for responsive UI components

---

Enjoy chatting with ChatLLM!

