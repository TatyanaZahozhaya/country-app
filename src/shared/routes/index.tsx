import { SharedTypes } from '@shared';
import { Home } from '@home';
import { Details } from '@details';
import { PageNotFound } from '@page_not_found';

export enum Paths {
    HOME = '/',
    DETAILS = '/details',
    COUNTRY_DETAILES = '/details/:id',
    PAGE_NOT_FOUND = '*',
}

export const AppRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <Details />,
        path: Paths.COUNTRY_DETAILES,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
