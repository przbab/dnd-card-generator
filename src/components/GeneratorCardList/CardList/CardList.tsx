'use client';

import React, { useContext } from 'react';
import { CardItem } from './CardItem';
import styles from './CardList.module.scss';
import CardListContext from 'contexts/CardList';

function CardList() {
    const { cardList } = useContext(CardListContext);

    return (
        <ol className={styles.root}>
            {cardList.map((item) => (
                <CardItem item={item} key={item.id} />
            ))}
        </ol>
    );
}

export default CardList;
