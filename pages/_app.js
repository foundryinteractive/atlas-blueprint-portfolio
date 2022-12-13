import '../faust.config';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import 'normalize.css/normalize.css';
import '../styles/main.scss';
import ThemeStyles from 'components/ThemeStyles/ThemeStyles';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((val) => {
        return val + 1;
      });
    }, 1000);
  }, []);
  return (
    <>
    <h3>Count: {count}</h3>
      <ThemeStyles />
      <FaustProvider pageProps={pageProps}>
        <Component {...pageProps} key={router.asPath} />
      </FaustProvider>
    </>
  );
}
