import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import AdminListPage from './pages/AdminListPage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminListPage,
        path: '/admins'
      },
      {
        ...UserListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
