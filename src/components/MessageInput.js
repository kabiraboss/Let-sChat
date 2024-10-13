import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/ChatSlice'; 
import { Button, TextField } from '@mui/material';

const MessageInput = ({ setIsTyping }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      dispatch(sendMessage(message)); 
      setMessage('');
      setIsTyping(false); 
    } else {
      alert('Please write a message before sending.'); 
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0); 
  };

  return (
    <div>
      <TextField
        value={message}
        onChange={handleChange}
        fullWidth
        placeholder="Type a message..."
        variant="outlined"
      />
      <Button onClick={handleSend} variant="contained" color="primary">Send</Button>
    </div>
  );
};

export default MessageInput;
