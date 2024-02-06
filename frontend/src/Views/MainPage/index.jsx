import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllPost } from "../../stores/posts/post.action";
import { Loading } from "../Components";
import MainCard from "./Components/Card";
import { Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { posts, loading } = useSelector(({ posts }) => posts);

  async function fetchAll() {
    try {
      await dispatch(fetchAllPost());
    } catch (err) {
      console.log(err);
      if (err.status === 401) {
        navigator("/auth/login");
      }
    }
  }

  useEffect(() => {
    fetchAll();
  }, []);

  if (loading) return <Loading />;

  return (
    <SimpleGrid
      columns={[3, null, 4]}
      w="70vw"
      autoFlow="row dense"
      rowGap="2rem"
      columnGap="1rem"
    >
      {!loading &&
        posts.map((post) => {
          return <MainCard key={post.id} post={post} />;
        })}
    </SimpleGrid>
  );
}
