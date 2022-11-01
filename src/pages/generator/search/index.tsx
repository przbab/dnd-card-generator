import React from 'react';
import cn from 'classnames';
import Panel from '../../../components/Panel';
import SearchPanel from '../../../components/SearchPanel';
import SearchResults from '../../../components/SearchResults';
import GeneratorLayout from '../../../layout/GeneratorLayout';
import styles from './index.module.scss';

function SearchPage() {
    return (
        <main className={styles.root}>
            <Panel className={cn(styles.panel, styles.searchFilters)}>
                <SearchPanel />
            </Panel>
            <Panel className={styles.panel}>
                <SearchResults />
            </Panel>
        </main>
    );
}

SearchPage.getLayout = GeneratorLayout;

export default SearchPage;
