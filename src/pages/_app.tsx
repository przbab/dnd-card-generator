import React from 'react';
import '../styles/global.scss';

function DnDCardGenerator({ Component, pageProps }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
}

export default DnDCardGenerator;
