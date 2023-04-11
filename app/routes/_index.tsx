import * as React from 'react';
import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => [{ title: 'New Remix App' }];

export default function Index() {
  return (
    <div className="bg-red-500 py-6 text-center">
      <h1 className="color-white text-4xl font-sans">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
