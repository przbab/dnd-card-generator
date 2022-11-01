import Link from 'next/link';
import React from 'react';
import CardList from './CardList/CardList';
import styles from './GeneratorCardList.module.scss';

export function GeneratorCardList() {
    return (
        <aside className={styles.root}>
            <CardList />
            <Link href="/generator/edit" type="button">
                New card
            </Link>
        </aside>
    );
}
