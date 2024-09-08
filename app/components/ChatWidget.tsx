'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react'

export default function ChatWidget() {
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
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
    setMessages((prev) => [...prev, { sender, text }])
    saveMessageToServer(sender, text)
  }

  const saveMessageToServer = (sender: string, message: string) => {
    // Implement the server-side saving logic here
    console.log('Saving message:', { sessionId, sender, message })
  }

  return (
    <div id="chat-widget" className={isMinimized ? 'minimized' : ''}>
      <div id="chat-header" onClick={toggleChat}>
        <span className="chat-title">Chat with us</span>
        <span className="chat-icon"></span>
      </div>
      <div id="chat-body">
        <div id="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender.toLowerCase()}-message`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div id="chat-input">
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
            Send
          </button>
        </div>
      </div>
    </div>
  )
}