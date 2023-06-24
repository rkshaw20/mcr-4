import { Flex, Heading, Select } from '@chakra-ui/react';
import { useDataContext } from '../context';

export const SideBar = () => {
    const {handleSort}=useDataContext();
  return (
    <Flex flexDir='column' m={5} >
      <Heading size='md' >Sort BY</Heading>
      <Select onChange={(e)=>handleSort(e)}>
        <option value="latest">Latest</option>
        <option value="mostVotes">Most Votes</option>
      </Select>
    </Flex>
  );
};
