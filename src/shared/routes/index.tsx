import { SharedTypes } from '@shared';
import { Home } from '@home';
import { Details } from '@details';
import { PageNotFound } from '@page_not_found';

export enum Paths {
    HOME = '/',
    DETAILS = '/details',
    PAGE_NOT_FOUND = '*',
}

export const AppRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <Details />,
        path: Paths.DETAILS,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
