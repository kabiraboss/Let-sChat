import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import '../LetsChat.css';

const ChatDisplay = () => {
  const { messages } = useSelector((state) => state.chat);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.user === 'Other' ? 'other' : 'user'}`}>
          <div className="message-content">
            <div>{msg.text}</div>
            <div className="timestamp">{msg.timestamp}</div>
          </div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatDisplay;
