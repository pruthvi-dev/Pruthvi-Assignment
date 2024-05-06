import logo from './logo.svg';
import './App.css';
import Practice from './practice';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Practice />
    </ChakraProvider>
  );
}

export default App;
