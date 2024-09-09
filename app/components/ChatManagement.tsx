import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';

interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}

interface Chat {
  id: string;
  sessionId: string;
  messages: Message[];
}

export default function ChatManagement() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const fetchChats = useCallback(async () => {
    try {
      const response = await fetch('/api/chats');
      const data = await response.json();
      setChats(data);
      if (!selectedChat && data.length > 0) {
        setSelectedChat(data[0]);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  }, [selectedChat]);

  useEffect(() => {
    fetchChats();
    const intervalId = setInterval(fetchChats, 5000);
    return () => clearInterval(intervalId);
  }, [fetchChats]);

  return (
    <div className="chat-management">
      <div className="chat-sidebar">
        <h2>Chat Sessions</h2>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.sessionId}
              className={`chat-session ${selectedChat?.sessionId === chat.sessionId ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat)}
            >
              <span className="session-id">{chat.sessionId}</span>
              <span className="last-message">
                {chat.messages[chat.messages.length - 1]?.content.slice(0, 30)}...
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-main">
        {selectedChat ? (
          <>
            <div className="chat-header">
              <h3>Session: {selectedChat.sessionId}</h3>
            </div>
            <div className="chat-messages">
              {selectedChat.messages.map((message, index) => (
                <div key={index} className={`message ${message.sender.toLowerCase()}`}>
                  <div className="message-content">{message.content}</div>
                  <div className="message-timestamp">
                    {format(new Date(message.timestamp), 'MMM d, yyyy HH:mm')}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="no-chat-selected">Select a chat session to view messages</div>
        )}
      </div>
    </div>
  );
}