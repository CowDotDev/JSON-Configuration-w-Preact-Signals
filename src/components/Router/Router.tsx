import { LogoBadge } from '@/components/LogoBadge';
import { Box } from '@mui/material';
import { Suspense } from 'react';
import {
  Outlet,
  RouteObject,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';

const BaseRouteLayout = () => {
  return (
    <Suspense>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />

      <Box
        position="relative"
        display="flex"
        minHeight="100vh"
        minWidth="100vw"
        gap={4}
        padding={4}
      >
        <Box>
          <LogoBadge />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Suspense>
  );
};

export const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      Component: BaseRouteLayout,
      children: [
        {
          index: true,
          lazy: () => import('@pages/Home'),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
