import React from 'react';
import '../styles/global.scss';
import type { ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: ['100', '400', '700'],
});

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function DnDCardGenerator({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return getLayout(<Component className={roboto.className} {...pageProps} />);
}

export default DnDCardGenerator;
