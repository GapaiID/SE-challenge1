import { PostList } from './PostList';
import { PostPagination } from './PostPagination';
import { usePost } from '@modules/main/hooks';

export const HomePost = () => {
  const { fetchedPosts, pagination, isLoading, error } = usePost();

  if (isLoading || error) {
    return <>Loading...</>;
  }

  return (
    <div>
      <PostList posts={fetchedPosts} />
      <PostPagination pagination={pagination} />
    </div>
  );
};
