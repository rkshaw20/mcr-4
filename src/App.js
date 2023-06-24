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
import {  RouterProvider,  createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/components/RootLayout';
import DataContextProvider from './pages/context';
import PostDetails from './pages/PostDetails';

const router = createBrowserRouter([

  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/:postDeId', element: <PostDetails /> },
    ],
  },
]);


function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}


export default App;
