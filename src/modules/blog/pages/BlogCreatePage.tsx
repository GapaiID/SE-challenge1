import { PostForm } from '@modules/blog/components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HOME_PAGE } from '@modules/main/routes';

export const BlogCreatePage = () => {
  const navigate = useNavigate();

  const handleCreateSuccess = () => {
    toast.success('Success create post');
    navigate(HOME_PAGE);
  };

  return (
    <div>
      <h1 className="is-size-4 has-text-weight-medium mb-2">Create Posts</h1>
      <PostForm onSuccess={handleCreateSuccess} />
    </div>
  );
};
