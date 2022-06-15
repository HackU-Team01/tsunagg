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
            <h1 className="text-3xl font-bold text-orange-500" id="h2_self_introduction_form">tunagg</h1> 
          </a>
        </Link>

        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
             <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
      </Container>
    </header>
  );
};

export default Header;
