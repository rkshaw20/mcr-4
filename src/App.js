import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Grid h='full' w='full' minH="100dvh" >
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
           <Routes>
            <Route path='/' element={<Home/>} />
           </Routes>
        </Grid>
    </ChakraProvider>
  );
}

export default App;
