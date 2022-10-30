import React from 'react';
import { CardListContextProvider } from '../../contexts/CardList';
import GeneratorHeader from '../../components/GeneratorHeader';

function GeneratorLayout(page: React.ReactElement) {
    return (
        <>
            <GeneratorHeader />
            <CardListContextProvider>{page}</CardListContextProvider>
        </>
    );
}

export default GeneratorLayout;
