import React, { createContext, useCallback, useMemo, useState } from 'react';
import CardType from '../types/Card';

const CardListContext = createContext({
    cardList: [],
});

function CardListContextProvider({ children }) {
    const [cardList, setCardList] = useState([]);

    const addCard = useCallback((card: CardType) => {
        setCardList((state) => state.concat(card));
    }, []);

    const value = useMemo(
        () => ({
            addCard,
            cardList,
        }),
        [addCard, cardList]
    );

    return <CardListContext.Provider value={value}>{children}</CardListContext.Provider>;
}

export { CardListContextProvider };
export default CardListContext;
