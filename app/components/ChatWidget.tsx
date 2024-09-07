'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ChatWidget() {
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState<{ sender: string; text: string; timestamp: Date }[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    const storedSessionId = sessionStorage.getItem('chatSessionId')
    if (storedSessionId) {
      setSessionId(storedSessionId)
    } else {
      const newSessionId = generateSessionId()
      sessionStorage.setItem('chatSessionId', newSessionId)
      setSessionId(newSessionId)
    }
  }, [])

  const generateSessionId = () => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
  }

  const toggleChat = () => {
    setIsMinimized(!isMinimized)
  }

  const sendMessage = () => {
    if (inputMessage.trim()) {
      addMessage('User', inputMessage)
      setInputMessage('')

      if (messages.length === 0) {
        setTimeout(() => {
          addMessage('Support', 'Thank you for your message po. Pwede po ba malaman ang pangalan at contact number po?')
        }, 1000)
      } else if (messages.length === 2) {
        setTimeout(() => {
          addMessage('Support', 'Automated message po ito, kapag po walang nagreply sa loob ng 2 mins. Magreply nalang po kami ng kasagutan sa number po ninyo. May karagdagang katanungan pa po sila?')
        }, 1000)
        setTimeout(() => {
          addMessage('Support', 'Ang SAMPANA MEDICLINIC MALOLOS po ay mayroong Clinical Laboratory, Xray, Ultrasound, 2D-Echo, ECG, at mga Doctors na maaaring magcheckup po sa inyo.  Kami po ay bukas mula 6AM-5PM (Monday-Saturday). Nandito lang po kami sa loob ng parking ng South Supermarket Malolos. May gusto po ba silang itanong?')
        }, 1000)
      } else {
        setTimeout(() => {
          addMessage('Support', 'Automated message po ito, kapag po walang nagreply sa loob ng 2 mins. Magreply nalang po kami ng kasagutan sa number po ninyo. May karagdagang katanungan pa po sila?')
        }, 1000)
      }
    }
  }

  const addMessage = (sender: string, text: string) => {
    setMessages((prev) => [...prev, { sender, text, timestamp: new Date() }])
    saveMessageToServer(sender, text)
  }

  const saveMessageToServer = async (sender: string, message: string) => {
    try {
      const response = await fetch('/api/chats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId, sender, content: message }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save message');
      }
    } catch (error) {
      console.error('Error saving message:', error);
      // Optionally, you can show an error message to the user here
    }
  };

  return (
    <div id="chat-widget" className={isMinimized ? 'minimized' : ''}>
      {isMinimized ? (
        <div id="chat-minimized" onClick={toggleChat}>
          <Image src="/assets/images/chatus.png" alt="Chat with us" width={80} height={80} />
        </div>
      ) : (
        <>
          <div id="chat-header" onClick={toggleChat}>
            <div className="chat-avatar">
              <img src="/assets/images/support-avatar.png" alt="Support Avatar" />
              <span className="online-status"></span>
            </div>
            <div className="chat-info">
              <span className="chat-title">Sampana Support</span>
              <span className="chat-status">Online</span>
            </div>
            <button className="minimize-button">-</button>
          </div>
          <div id="chat-body">
            <div id="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender.toLowerCase()}-message`}>
                  <div className="message-content">{msg.text}</div>
                  <div className="message-timestamp">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
            </div>
            <div id="chat-input">
              <button className="attachment-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M14 13.5V8a4 4 0 1 0-8 0v5.5a6.5 6.5 0 1 0 13 0V4h2v9.5a8.5 8.5 0 1 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 0 1-7 0V8h2v5.5a1.5 1.5 0 0 0 3 0z"/>
                </svg>
              </button>
              <input
                type="text"
                id="user-message"
                className="chat-input-field"
                placeholder="Type message here"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button onClick={sendMessage} className="chat-send-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}