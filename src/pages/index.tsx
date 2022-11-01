import Link from 'next/link';
import React from 'react';
import { linkToGenerator } from '../helpers/links';

function HelloWorld() {
    return (
        <main>
            <Link href={linkToGenerator()} type="button">
                Go to generator
            </Link>
        </main>
    );
}

export default HelloWorld;
