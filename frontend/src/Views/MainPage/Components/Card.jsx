import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function MainCard({ post }) {
  const {
    id,
    title,
    image_src: img,
    creator_name,
    tags,
  } = useMemo(() => {
    return post;
  }, [post]);

  return (
    <Link to={`/posts/${id}`}>
      <Card
        h="100%"
        minW="12rem"
        border="1px"
        borderColor="gray.100"
        transitionDuration="300ms"
        _hover={{
          boxShadow: "lg",
        }}
      >
        <CardBody>
          <Image
            src={img}
            alt={title}
            borderRadius="lg"
            aspectRatio={16 / 9}
            minH="30%"
          />
          <Stack
            mt="6"
            h="50%"
            position="relative"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md">{title}</Heading>
              <Box as="span" display="flex" gap="0.2rem" flexWrap="wrap">
                {tags.map((tag, idx) => (
                  <Tag size="sm" key={idx} variant="outline" color="blue.800">
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                ))}
              </Box>
            </Box>
            <Text color="gray.800" fontSize="small">
              {creator_name}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}
