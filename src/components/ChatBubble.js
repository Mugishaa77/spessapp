import React from 'react';
import './ChatBubble.css';

function ChatBubble({ isSender }) {
  return (
    <div className={`chat-bubble ${isSender ? 'sender' : 'receiver'}`}>
      {/* Placeholder text */}
    </div>
  );
}

export default ChatBubble;
