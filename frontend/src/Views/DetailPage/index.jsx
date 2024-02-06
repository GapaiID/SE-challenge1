import { Box, HStack, Image, Text, useToast } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostById } from "../../stores/posts/post.action";
import DetailTag from "./Components/DetailTag";
import { Loading } from "../Components";
import dateParser from "../../utils/dateParser";

export default function DetailPage() {
  const { id } = useParams();
  const toaster = useToast();
  const dispatcher = useDispatch();
  const navigator = useNavigate();

  const { loading, post } = useSelector(({ posts }) => posts);

  useEffect(() => {
    async function fetchPost() {
      try {
        await dispatcher(fetchPostById(id));
      } catch (err) {
        if (err.status === 401) {
          navigator("/auth/login");
        }
        toaster({ status: "error", title: "Something is wrong" });
      }
    }
    fetchPost();
  }, [id, dispatcher, navigator, toaster]);

  const { title, content, creator_name, image_src, tags, created_at } =
    useMemo(() => {
      console.log(post);
      return post;
    }, [post]);

  if (loading) return <Loading />;

  return (
    <Box position="relative" display="flex" flexDir="column" w="80%">
      <HStack>
        {tags?.map(({ tag, id: tag_id }) => {
          return <DetailTag key={tag_id} text={tag} />;
        })}
      </HStack>
      <Text fontSize="2.7rem" fontWeight="600" whiteSpace="pre-line">
        {title}
      </Text>
      <HStack>
        <Box>
          <Text>{creator_name}</Text>
        </Box>
        <Box>{dateParser(created_at)}</Box>
      </HStack>
      <Image alt={title} src={image_src} aspectRatio={16 / 9} maxW="60%" />
      <Text fontSize="1.05rem" fontWeight="normal" color="gray.700">
        {content}
      </Text>
    </Box>
  );
}
