import React from 'react';
import cn from 'classnames';
import GeneratorCardList from '../../components/GeneratorCardList';
import GeneratorLayout from '../../layout/GeneratorLayout/GeneratorLayout';
import Panel from '../../components/Panel';
import PrintPreview from '../../components/PrintPreview';
import styles from './index.module.scss';

function Generator() {
    return (
        <main className={styles.root}>
            <Panel className={cn(styles.panel, styles.cardList)}>
                <GeneratorCardList />
            </Panel>
            <Panel className={styles.panel}>
                <PrintPreview />
            </Panel>
        </main>
    );
}

Generator.getLayout = GeneratorLayout;

export default Generator;
