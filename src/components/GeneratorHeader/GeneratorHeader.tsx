import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { linkToGenerator, linkToSearch } from '../../helpers/links';
import styles from './GeneratorHeader.module.scss';

function GeneratorHeader() {
    const router = useRouter();

    return (
        <header>
            <nav className={styles.root}>
                <Link
                    className={cn(router.asPath.includes('search') ? styles.inactiveTab : styles.activeTab, styles.tab)}
                    href={linkToGenerator()}
                >
                    Generator
                </Link>
                <Link
                    className={cn(router.asPath.includes('search') ? styles.activeTab : styles.inactiveTab, styles.tab)}
                    href={linkToSearch()}
                >
                    Search
                </Link>
            </nav>
        </header>
    );
}

export default GeneratorHeader;
