import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage/PersonPage';
import FavoritePage from '@containers/FavoritesPage/FavoritePage';
import SearchPage from '@containers/SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/favorites',
        element: <FavoritePage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export default routesConfig;