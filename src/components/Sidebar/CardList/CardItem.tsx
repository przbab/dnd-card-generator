import React from 'react';
import CardType from 'types/Card.type';

function CardItem({ item }: { item: CardType }) {
    return <li>{item.name}</li>;
}

export default CardItem;
