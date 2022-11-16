import Link from 'next/link';
import React from 'react';
import { linkToGenerator, linkToSearch } from '../../helpers/links';
import styles from './GeneratorHeader.module.scss';

function GeneratorHeader() {
    return (
        <header>
            <nav className={styles.root}>
                <Link className={[styles.activeTab, styles.tab].join(' ')} href={linkToGenerator()}>
                    Generator
                </Link>
                <Link className={[styles.inactiveTab, styles.tab].join(' ')} href={linkToSearch()}>
                    Search
                </Link>
            </nav>
        </header>
    );
}

export default GeneratorHeader;
