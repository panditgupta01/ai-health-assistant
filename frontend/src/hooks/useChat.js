import { useState, useRef } from "react";
import axios from "axios";

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      type: "welcome",
      content:
        "Hey! I'm HostelMed 👋\n\nTell me your symptoms and I'll help you figure out what's going on. I understand hostel life — tight budget, mess food issues, and all.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const historyRef = useRef([]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setError(null);

    // Add user message to UI
    const userMsg = {
      id: Date.now(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await axios.post("https://ai-health-assistant-bd6g.onrender.com/api/symptom", {
        message: trimmed,
        chatHistory: historyRef.current,
      });

      const aiData = res.data.response;

      // Save to history for context
      historyRef.current = [
        ...historyRef.current,
        { role: "user", content: trimmed },
        { role: "assistant", content: JSON.stringify(aiData) },
      ].slice(-10); // keep last 10 messages

      const aiMsg = {
        id: Date.now() + 1,
        role: "assistant",
        type: "health",
        data: aiData,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorText =
        err.response?.data?.error ||
        "Connection failed. Is the backend running on port 5000?";
      setError(errorText);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          type: "error",
          content: errorText,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    historyRef.current = [];
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        type: "welcome",
        content:
          "Hey! I'm HostelMed 👋\n\nTell me your symptoms and I'll help you figure out what's going on. I understand hostel life — tight budget, mess food issues, and all.",
      },
    ]);
    setError(null);
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    error,
    sendMessage,
    clearChat,
  };
}
