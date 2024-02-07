import { UserList } from './UserList';
import { UserPagination } from './UserPagination';

export const UserListWrapper = () => {
  return (
    <div>
      <UserList />
      <UserPagination />
    </div>
  );
};
