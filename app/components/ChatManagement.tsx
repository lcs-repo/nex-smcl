import { useState, useEffect } from 'react';

interface Chat {
  id: string;
  sessionId: string;
  messages: { sender: string; content: string; timestamp: Date }[];
}

export default function ChatManagement() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch('/api/chats');
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
    const intervalId = setInterval(fetchChats, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="chat-management">
      <h2>Chat Management</h2>
      {chats.map((chat) => (
        <div key={chat.sessionId} className="chat-item">
          <h3>Session ID: {chat.sessionId}</h3>
          <ul>
            {chat.messages.flat().map((message, index) => (
              <li key={index}>
                {message.sender}: {message.content}
                {message.timestamp && ` (${new Date(message.timestamp).toLocaleString()})`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}