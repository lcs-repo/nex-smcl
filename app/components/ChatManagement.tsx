import { useState, useEffect } from 'react';

interface Chat {
  id: string;
  user: string;
  messages: { sender: string; content: string }[];
}

export default function ChatManagement() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats= async() => {
        try {
            const response = await fetch('api/chats');
            const data = await response.json();
            setChats(data);
        } catch (error) {
            console.error('Error fetching chats:', error)
        }
    }; 

    // Fetch chats immediately
    fetchChats();

    // Set up polling every 5 seconds
    const intervalId = setInterval (fetchChats, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

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