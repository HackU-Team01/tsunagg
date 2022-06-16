import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Container from '@/components/common/parts/Container';

const Header = (): JSX.Element => {

  return (
    <header className="relative py-3 shadow-md">
      <Container className="flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/">
          <a>
            <h1 className="text-3xl font-bold text-blue-800">tunagg</h1> 
          </a>
        </Link>

        <Link href="/">
          <a>
            <h1 className="text-sm text-blue-400">home</h1> 
          </a>
        </Link>

        <Link href="/form">
          <a>
            <h1 className="text-sm text-blue-400">自己紹介入力</h1> 
          </a>
        </Link>

        <Link href="/self_introduction_card">
          <a>
            <h1 className="text-sm text-blue-400">入力内容確認</h1> 
          </a>
        </Link>

        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
             <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
      </Container>
    </header>
  );
};

export default Header;
