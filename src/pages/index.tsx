import Link from 'next/link';
import React from 'react';

function HelloWorld() {
    return (
        <main>
            <Link href="/generator" type="button">
                Go to generator
            </Link>
        </main>
    );
}

export default HelloWorld;
