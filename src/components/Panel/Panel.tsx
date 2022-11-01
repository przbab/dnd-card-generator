import React from 'react';
import cn from 'classnames';
import styles from './Panel.module.scss';

export namespace Panel {
    export type Props = {
        children: React.ReactElement;
        className?: string;
    };
}

export function Panel({ children, className }: Panel.Props) {
    return <div className={cn(styles.root, className)}>{children}</div>;
}

Panel.defaultProps = {
    className: '',
};
