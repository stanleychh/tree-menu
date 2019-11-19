import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolder, faBook, faCaretDown, faCaretRight, faFilePowerpoint, faBriefcase, faSpinner, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FOLDER_OPEN, FOLDER, BOOK, CARET_RIGHT, CARET_DOWN, SLIDE, PROJECT, SPINNER } from '../../common/iconTypes.js';
import styles from './Icon.module.css';

const renderAwesomeIcon = (icon, color='black', size='lg') => <FontAwesomeIcon icon={icon} color={color} size={size} className={styles.base} />;

export const Icon = ({ type }) => {
    if(type === FOLDER) return renderAwesomeIcon(faFolder, 'orange');
    if(type === FOLDER_OPEN) return renderAwesomeIcon(faFolderOpen, 'orange');
    if(type === BOOK) return renderAwesomeIcon(faBook, 'grey');
    if(type === CARET_RIGHT) return renderAwesomeIcon(faCaretRight);
    if(type === CARET_DOWN) return renderAwesomeIcon(faCaretDown);
    if(type === SLIDE) return renderAwesomeIcon(faFilePowerpoint);
    if(type === PROJECT) return renderAwesomeIcon(faBriefcase);
    if(type === SPINNER) return renderAwesomeIcon(faSpinner, 'grey');

    return renderAwesomeIcon(faQuestion, 'grey');
};

Icon.propTypes = {
    type: PropTypes.string
};

Icon.defaultProps = {
    type: ''
};
