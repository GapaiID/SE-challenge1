import { PostForm } from '@modules/blog/components';
import { toast } from 'react-toastify';
import { HOME_PAGE } from '@modules/main/routes';
import { useNavigate } from 'react-router-dom';

export const BlogUpdatePage = () => {
  const navigate = useNavigate();

  const handleUpdateSuccess = () => {
    toast.success('Success update post');
    navigate(HOME_PAGE);
  };

  return (
    <div>
      <h1 className="is-size-4 has-text-weight-medium mb-2">Update Posts</h1>
      <PostForm onSuccess={() => handleUpdateSuccess} />
    </div>
  );
};
