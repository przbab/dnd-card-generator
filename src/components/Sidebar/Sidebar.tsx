import Link from 'next/link';
import React from 'react';
import CardList from './CardList/CardList';
import styles from './Sidebar.module.scss';

function Sidebar({ spellList }) {
    return (
        <aside className={styles.root}>
            <form>
                <input list="itemList" type="search" />
            </form>
            <CardList />
            <Link href="/generator/edit">
                <a type="button">New card</a>
            </Link>
            <datalist id="itemList">
                {spellList.map((spell) => (
                    <option key={spell.id} value={spell.name} />
                ))}
            </datalist>
        </aside>
    );
}

export default Sidebar;
