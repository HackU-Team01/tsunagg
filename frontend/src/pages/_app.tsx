import { AppProps } from 'next/app';
import React from 'react';

import { AuthProvider } from '@/lib/auth/AuthProvider';

import '../styles/globals.css';

// eslint-disable-next-line no-undef
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
