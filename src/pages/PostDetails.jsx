import { useParams } from "react-router-dom";
import {
    Avatar,
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    HStack,
    Heading,
    IconButton,
    Tag,
    Text,
  } from '@chakra-ui/react';
  import { BsBookmark } from 'react-icons/bs';
  import { BiShareAlt, BiComment } from 'react-icons/bi';
  import { TiArrowUpThick ,TiArrowDownThick} from "react-icons/ti";
import { useDataContext } from "./context";
import { AiOutlineHeart } from 'react-icons/ai';


const PostDetails=()=>{
    const {postDeId}=useParams();
    
      const {handleUpvote,handleDownvote,handleBookmark,data}=useDataContext()

      const selectedPost=data.posts.find(({postId}) => postId === postDeId);
      console.log(selectedPost)
      const {
        postId,
        username,
        name,
        picUrl,
        post: title,
        postDescription,
        upvotes,
        downvotes,
        tags,
        createdAt,
        comments,
        isBookmarked,
      } =selectedPost;
      return (
        <Card p="1rem" mb={3} maxH="600px" key={postId} >
          <Flex>
            <Flex flexDir="column">
              <IconButton color='blue.400' onClick={()=>handleUpvote(postId)} icon={<TiArrowUpThick />} />
              <Text color='blue.400' >{upvotes - downvotes}</Text>
              <IconButton onClick={()=>handleDownvote(postId)} icon={<TiArrowDownThick />} />
            </Flex>
            <Flex flexDir='column'>
            <Flex flexDir="column">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name={name} src={picUrl} />
    
                    <Box>
                      <Heading size="sm">Posted by</Heading>
                      <Text color="blue.400">@{username}</Text>
                    </Box>
                  </Flex>{' '}
                </Flex>
              </CardHeader>
              <CardBody mt="-6">
                <Heading>{title}</Heading>
                <HStack spacing={4}>
                  {tags.map((tag)=>(
                    <Tag variant="solid" key={tag} colorScheme="twitter">
                    {tag}
                  </Tag>
                  ))}
                  
                </HStack>
                <Text>{postDescription}</Text>
              </CardBody>
    
              <CardFooter justify="space-between" flexWrap="wrap">
                <Flex>
                  {' '}
                  <IconButton
                    p="1rem"
                    variant="ghost"
                    icon={<AiOutlineHeart />}
                  ></IconButton>
                  <IconButton
                    p="1rem"
                    variant="ghost"
                    icon={<BiShareAlt />}
                  ></IconButton>{' '}
                </Flex>
    
                <IconButton
                  p="1rem"
                  variant="ghost"
                  onClick={()=>handleBookmark(postId)}
                  color={isBookmarked ? 'blue.400':''}
                  icon={<BsBookmark />}
                ></IconButton>
              </CardFooter>
            </Flex>
            <Flex flexDir='column'>
            <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar  src={picUrl} />
    
                    <Box>
                      <Heading size="sm">Posted by</Heading>
                      <Text color="blue.400">@{comments.username}</Text>
                      <Text fontSize="sm">
                    {new Date(comments?.createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </Text>
                    </Box>
                  </Flex>{' '}
                </Flex>
              </CardHeader>
              <CardBody mt="-6">
                
                <Text>{comments.comment}</Text>
              </CardBody>
    
              <CardFooter justify="space-between" flexWrap="wrap">
                <Flex>
                  {' '}
                  <IconButton
                    p="1rem"
                    variant="ghost"
                    icon={<BiComment />}
                  ></IconButton>
                  <IconButton
                    p="1rem"
                    variant="ghost"
                    icon={<BiShareAlt />}
                  ></IconButton>{' '}
                </Flex>
    
                <IconButton
                  p="1rem"
                  variant="ghost"
                  onClick={()=>handleBookmark(postId)}
                  color={isBookmarked ? 'blue.400':''}
                  icon={<BsBookmark />}
                ></IconButton>
              </CardFooter>
            </Flex>
            </Flex>
           
          </Flex>
        </Card>
      );
}

export default PostDetails;