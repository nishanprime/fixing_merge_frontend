import React, { useEffect, useState } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import AppProvider from '../contexts/AppProvider';
import axios from 'axios';
axios.defaults.withCredentials = true;

import '../styles/globals.css';
// css and fonts imports
import Theme from '../bootstrap/theme';

// context imports

// NProgress bar
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// toaster imports

// components imports
// import Loader from "@components/Loader";

if (typeof window !== 'undefined') {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}

const App = ({ Component, pageProps }: any) => {
  const Layout = Component.layout || (({ children }: any) => children);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppProvider>
      <ChakraProvider theme={Theme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AppProvider>
  );
};

export default App;
