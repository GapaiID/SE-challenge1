export const PostListItem = ({ post }: any) => {
  return (
    <div className="card post-card" style={{ marginBottom: '1rem' }}>
      <div className="card-content">
        <p className="title is-4">{post?.title}</p>
        <p className="subtitle is-6">Author: {post?.user.name}</p>
        <div className="content">
            {post?.body}
        </div>
      </div>
    </div>
  );
};
