import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { GROUP, BOOK, SLIDE, PROJECT } from '../../common/iconTypes.js';
import styles from './Node.module.css';

const isGroup = (tclass) => (tclass === GROUP);

const renderIcon = (hasChildren, tclass) => {
    if (tclass === SLIDE) return 'slide';
    if (tclass === BOOK) return 'book';
    if (tclass === PROJECT) return 'project';
    if (hasChildren && isGroup(tclass)) return 'folder_open';
    if (!hasChildren && isGroup(tclass)) return 'folder';
};

export const Node = ({ title, uid, tclass, assets, onClick }) => {
    const hasChildren = Boolean(assets);
    const caretIcon = (hasChildren) ? 'caret_down' : 'caret_right';
    const onClickEvent = (hasChildren || !isGroup(tclass)) ? null : onClick;

    return(
        <li className={styles.node} id={uid} role={tclass} onClick={onClickEvent}>
            { isGroup(tclass) && <Icon type={caretIcon} /> }
            <Icon type={renderIcon(hasChildren, tclass)} />
            <span className={styles.label}>{title}</span>
        </li>
    );
};

Node.propTypes = {
    title: PropTypes.string,
    tclass: PropTypes.string,
    uid: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

Node.defaultProps = {
    title: '',
    tclass: '',
};
