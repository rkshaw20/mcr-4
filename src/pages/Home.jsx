import { Box, Flex } from '@chakra-ui/react';
import PostCard from './components/PostCard';
import { useDataContext } from './context';

const Home = () => {
    const  {data}=useDataContext();
    console.log({data})
    if(!data) return;
  return (
    <Box margin={5}>
        {data.posts.map((post)=>(
            <PostCard key={post.postId} post={post} />
        ))}
    </Box>
  );
};

export default Home;
