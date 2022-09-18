import React from 'react';
import Sidebar from '../../components/Sidebar';
import spellListIndex from '../../../public/spells/index.json';
import styles from './index.module.scss';

function Generator({ spellList }) {
    return (
        <div className={styles.root}>
            <Sidebar spellList={spellList} />
            <main>Test</main>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            spellList: spellListIndex,
        },
    };
}

export default Generator;
