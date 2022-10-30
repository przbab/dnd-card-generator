import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import styles from './page.module.scss';
import GeneratorLayout from 'components/GeneratorLayout';

function Generator() {
    return (
        <main className={styles.root}>
            <Page />
        </main>
    );
}

Generator.getLayout = function getLayout(page: ReactElement) {
    return <GeneratorLayout>{page}</GeneratorLayout>;
};

export default Generator;
