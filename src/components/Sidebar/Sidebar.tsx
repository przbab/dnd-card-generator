import Link from 'next/link';
import React from 'react';
import CardList from './CardList/CardList';
import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <aside className={styles.root}>
            <form>
                <input type="search" />
            </form>
            <CardList />
            <Link href="/generator/edit" type="button">
                New card
            </Link>
        </aside>
    );
}

export default Sidebar;
