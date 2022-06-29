import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/common/parts/Container';

const Footer = (): JSX.Element => {
  return (
    <footer className="py-1 bg-gray-50">
      <Container>
        <div className="flex flex-col justify-between items-start md:flex-row">
          {/* ロゴ */}
          <Link href="/">
            <a>tsunagg</a>
          </Link>
        </div>
        <small className="block mt-10 text-center md:text-right">&copy; 2022 tsunagg</small>
      </Container>
    </footer>
  );
};

export default Footer;
