import {
    Box,
    Flex,
    Heading,
    Icon,
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
  
  export const Header = () => {
    return (
      <Box>
        <Flex
          p={{ base: '.2rem', lg: '.4rem' }}
          justifyContent={{ base: 'space-between', lg: 'space-between' }}
        >
          <Heading color={'blue.400'}>My Forum</Heading>
          <ColorModeSwitcher />
        </Flex>
        <hr />
      </Box>
    );
  };