import React from 'react';
import CardType from 'types/Card.type';

export namespace CardItem {
    export type Props = {
        item: CardType;
    };
}

export function CardItem({ item }: CardItem.Props) {
    return <li>{item.name}</li>;
}
