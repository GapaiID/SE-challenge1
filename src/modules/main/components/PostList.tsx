import { PostListItem } from './PostListItem';

export const PostList = ({ posts }: any) => {
  return (
    <div>
        {(posts || []).map((post: any) => (
            <PostListItem post={post} key={post?.id} />
        ))}
    </div>
  );
};
