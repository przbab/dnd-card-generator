import React from 'react';
import styles from './ItemCard.module.scss';

type ItemProperty = {
    name: string;
    value: string | number;
};

type ItemCardProps = {
    name: string;
    properties: ItemProperty[];
    description: string;
};

function ItemCard({ description, name, properties = [] }: ItemCardProps) {
    return (
        <div className={styles.root}>
            <span className={styles.name}>{name}</span>
            {properties && (
                <div className={styles.properties}>
                    {properties.map((property) => (
                        <div className={styles.property} key={property.name}>
                            <span className={styles.propertyName}>{property.name}</span>
                            <span className={styles.propertyValue}>{property.value}</span>
                        </div>
                    ))}
                </div>
            )}
            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default ItemCard;
