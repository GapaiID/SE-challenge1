import { createBrowserRouter } from 'react-router-dom';
import Index from '../pages';
import Detail from '../pages/detail';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
]);
