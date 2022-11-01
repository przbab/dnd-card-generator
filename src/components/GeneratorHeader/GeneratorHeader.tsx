import Link from 'next/link';
import React from 'react';
import { linkToGenerator, linkToSearch } from '../../helpers/links';

function GeneratorHeader() {
    return (
        <header>
            <nav>
                <Link href={linkToGenerator()}>Generator</Link>
                <Link href={linkToSearch()}>Search</Link>
            </nav>
        </header>
    );
}

export default GeneratorHeader;
