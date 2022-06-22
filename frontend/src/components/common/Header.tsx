import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Container from '@/components/common/parts/Container';

const Header = (): JSX.Element => {
  return (
    <header className="relative py-6 shadow-md  bg-red-500">
      <Container className="flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/">
          <a>
            <h1 className="text-3xl font-bold text-gray-100">tsunagg</h1>
          </a>
        </Link>

        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <Link href="/form">
          <a>
            <svg
              className="h-8 w-11 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
            <p className="text-sm text-gray-100">自己紹介</p>
          </a>
        </Link>

        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </Container>
    </header>
  );
};

export default Header;
