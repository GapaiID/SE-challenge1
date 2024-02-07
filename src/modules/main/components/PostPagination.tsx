import { Pagination } from 'react-bulma-components';

export const PostPagination = ({ pagination }: any) => {
  return (
    <Pagination
      current={pagination?.current}
      showFirstLast
      total={pagination?.last_page}
      onChange={() => alert('change')}
    />
  );
};
