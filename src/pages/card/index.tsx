import React from 'react';
import { ItemCard } from '../../components/Cards';

function CardPage() {
    return (
        <main>
            <ItemCard
                description="Description"
                name="test"
                properties={[
                    { name: 'Rarity', value: 'Common' },
                    { name: 'Weight', value: 1 },
                    { name: 'Requites Attunement', value: 'Yes' },
                    { name: 'Properties', value: 'Finesse, Light, Range, Thrown' },
                ]}
            />
        </main>
    );
}

export default CardPage;
