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
import { BiSolidUpvote, BiSolidDownvote } from 'react-icons/bi';
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/ti';
import { useDataContext } from '../context';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
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
  } = post;

  const { handleUpvote, handleDownvote, handleBookmark } = useDataContext();

  const handleComment=()=> {
    
  }

  return (
    <Card p="1rem" mb={3} maxH="600px" key={postId}>
      <Flex>
        <Flex flexDir="column">
          <IconButton
            color="blue.400"
            onClick={() => handleUpvote(postId)}
            icon={<TiArrowUpThick />}
          />
          <Text color="blue.400">{upvotes - downvotes}</Text>
          <IconButton
            onClick={() => handleDownvote(postId)}
            icon={<TiArrowDownThick />}
          />
        </Flex>
        <Flex flexDir="column">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name={name} src={picUrl} />

                <Box>
                  <Heading size="sm">Posted by</Heading>
                  <Text color="blue.400">@{username}</Text>
                  <Text fontSize="sm">
                    {new Date(post?.createdAt).toLocaleDateString('en-US', {
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
            <Heading>{title}</Heading>
            <HStack spacing={4}>
              {tags.map(tag => (
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
              <Link to={`/${postId}`} ><IconButton
                p="1rem"
                variant="ghost"
                onClick={()=>handleComment()}
                icon={<BiComment />}
              ></IconButton></Link>
              
              <IconButton
                p="1rem"
                variant="ghost"
                icon={<BiShareAlt />}
              ></IconButton>{' '}
            </Flex>

            <IconButton
              p="1rem"
              variant="ghost"
              onClick={() => handleBookmark(postId)}
              color={isBookmarked ? 'blue.400' : ''}
              icon={<BsBookmark />}
            ></IconButton>
          </CardFooter>
        </Flex>
      </Flex>
    </Card>
  );
};

// const PostCard=()=>{
//     return(
//         <Flex  >Post</Flex>
//     )
// }
export default PostCard;
