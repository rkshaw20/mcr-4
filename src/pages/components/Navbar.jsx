import { Avatar, Box, Flex, Icon, Stack, Text, useBreakpointValue, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { AiFillHome } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

export const NavBar = () => {
    // const { onOpen, isOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue('gray.300', 'gray.600');
    const flexDirection = useBreakpointValue({ base: 'row', lg: 'column' });
  
    return (
      <>
        <Flex
          height="full"
          flexDir={flexDirection}
          justify="space-between"
          p={{ base: '', lg: '1rem' }}
        >
          <Flex
            height="full"
            spacing={3}
            p={{ base: '.2rem', lg: '1rem' }}
            flexDir={flexDirection}
            justifyContent={{ base: 'space-between', lg: 'flex-start' }}
          >
            {/* <Flex alignItems="center"> */}
             
            <Flex alignItems="center">
            
              <Icon fontSize="1.5rem" as={AiFillHome} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Home
              </Text>
          </Flex>
            <Flex alignItems="center">
            
              <Icon fontSize="1.5rem" as={MdExplore} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Explore
              </Text>
          </Flex>
            <Flex alignItems="center">
            
              <Icon fontSize="1.5rem" as={BsFillBookmarkFill} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Bookmark
              </Text>
          </Flex>
            <Flex alignItems="center">
            
              <Icon fontSize="1.5rem" as={CgProfile} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Profile
              </Text>
          </Flex>
          </Flex>
  
          <Stack
            // display={{ base: 'none', lg: 'block' }}
            pt={5}
            p={{ base: '.5rem', lg: '1rem' }}
            width={{ base: '', lg: '250px' }}
            cursor="pointer"
          >
           
           
                <Flex
                  rounded="2rem"
                  _hover={{ bg: bgColor }}
                  p={{ base: '', lg: '.5rem' }}
                  border="1px solid gray"
                >
                  <Avatar
                    size={{ base: 'md', lg: 'md' }}
                    src="https://res.cloudinary.com/dn5zs5sqx/image/upload/v1687185484/FhNGqSr__400x400_fnkcno.jpg"
                  />
                  <Box ml="3">
                    <Text fontWeight="bold">Raj</Text>
                    <Text fontSize="sm">@RajKishorShaw17</Text>
                  </Box>
                </Flex>
              
          </Stack>
        {/* </Flex> */}
        </Flex>
      </>
    );
  };
  