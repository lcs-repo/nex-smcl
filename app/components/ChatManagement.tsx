import { useState, useEffect } from 'react';

interface Chat {
  id: string;
  user: string;
  messages: { sender: string; content: string }[];
}

export default function ChatManagement() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    // Implement API call to fetch chats
    const response = await fetch('/api/chats');
    const data = await response.json();
    setChats(data);
  };

  return (
    <div className="chat-management">
      <h2>Chat Management</h2>
      {chats.map((chat) => (
        <div key={chat.id} className="chat-item">
          <h3>User: {chat.user}</h3>
          <ul>
            {chat.messages.map((message, index) => (
              <li key={index}>
                {message.sender}: {message.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}