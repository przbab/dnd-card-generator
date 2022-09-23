import React from 'react';
import styles from './GeneratorLayout.module.scss';
import Sidebar from 'components/Sidebar';

function GeneratorLayout({ children }) {
    const spellList = [];

    return (
        <div className={styles.root}>
            <Sidebar spellList={spellList} />
            {children}
        </div>
    );
}

export default GeneratorLayout;
