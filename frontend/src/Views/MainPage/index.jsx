import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllPost } from "../../stores/posts/post.action";
import { Loading } from "../Components";
import MainCard from "./Components/Card";
import { SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const { posts, loading } = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {
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
    fetchAll();
  }, [dispatch, navigator]);

  if (loading) return <Loading />;

  return (
    <SimpleGrid
      columns={[1, null, 3, 4]}
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
