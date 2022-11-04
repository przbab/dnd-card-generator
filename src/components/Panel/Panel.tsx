import React from 'react';
import cn from 'classnames';
import styles from './Panel.module.scss';

type PanelProps = {
    children: React.ReactElement;
    className?: string;
};

function Panel({ children, className }: PanelProps) {
    return <div className={cn(styles.root, className)}>{children}</div>;
}

Panel.defaultProps = {
    className: '',
};

export default Panel;
