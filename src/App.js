import React, { useEffect, useRef  , useState} from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './redux/ChatSlice';
import { Box, Container } from '@mui/material';
import MessageInput from './components/MessageInput';
import ChatDisplay from './components/ChatDisplay';
import TypingIndicator from './components/TypingIndicator'; 
import './LetsChat.css';

const App = () => {
  const dispatch = useDispatch();
  const messageSent = useRef(false); 
  const [isTyping, setIsTyping] = useState(false); 
  

  useEffect(() => {
    
    if (!messageSent.current) {
      const timeoutId = setTimeout(() => {
        dispatch(receiveMessage('Hello from The Mango Jelly team!'));
        messageSent.current = true; 
      }, 500);

      
      return () => clearTimeout(timeoutId);
    }
  }, [dispatch]);

  return (
    <Container maxWidth="sm" className="container">
      <Box mt={4} className="chat-container">
      <ChatDisplay />
        {isTyping && <TypingIndicator />}
        <MessageInput setIsTyping={setIsTyping} /> 
      </Box>
    </Container>
  );
};

export default App;
