import { SharedTypes } from '@shared';
import { Home } from '@home';
import { Details } from '@details';
import { PageNotFound } from '@page_not_found';

export enum Paths {
    HOME = '/',
    DETAILES = '/detailes',
    PAGE_NOT_FOUND = '*',
}

export const AppRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <Details />,
        path: Paths.DETAILES,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
