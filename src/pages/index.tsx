import Link from 'next/link';
import React from 'react';

function HelloWorld() {
    return (
        <main>
            <Link href="/generator">
                <a type="button">Go to generator</a>
            </Link>
        </main>
    );
}

export default HelloWorld;
