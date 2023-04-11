import reset from '@unocss/reset/tailwind.css';
import type { LinksFunction } from 'remix';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import * as React from 'react';
import unocss from '~/uno.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: unocss,
  },
  {
    rel: 'stylesheet',
    href: reset,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
