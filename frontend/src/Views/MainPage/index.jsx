import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllPost } from "../../stores/posts/post.action";
import { Loading } from "../Components";

export default function MainPage() {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector(({ posts }) => posts);

  async function fetchAll() {
    try {
      await dispatch(fetchAllPost());
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAll();
  }, []);

  if (loading) return <Loading />;

  return <div>{JSON.stringify(posts)}</div>;
}
