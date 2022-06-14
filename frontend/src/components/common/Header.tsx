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
            <Image src="/vercel.svg" width={120} height={60} alt="vercel" />
          </a>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
