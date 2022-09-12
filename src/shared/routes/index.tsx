import { SharedTypes } from '..';

import { Home } from '@home';
import { Detailes } from '@detailes';
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
        element: <Detailes />,
        path: Paths.DETAILES,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
