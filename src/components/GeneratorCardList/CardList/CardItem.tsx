import React from 'react';
import CardType from 'types/Card.type';

type CardItemProps = {
    item: CardType;
};

function CardItem({ item }: CardItemProps) {
    return <li>{item.name}</li>;
}

export default CardItem;
