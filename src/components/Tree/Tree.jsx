import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash/fp';
import { Node } from '../Node';
import styles from './Tree.module.css';

export const Tree = ({ treeData, onFetchData }) => {
    return(
        <>
            {treeData.map((item) =>
                <ul key={item.uid} className={styles.noBull}>
                    <Node
                        title={item.caption}
                        tclass={item.tclass}
                        uid={item.uid}
                        assets={item.assets}
                        onClick={() => onFetchData(item.uid, item.isMulti,item.requestInfo)}
                    />
                    {!isNil(item.assets) && item.assets.length > 0 &&
                        <Tree treeData={item.assets} onFetchData={onFetchData} />
                    }
                </ul>
            )}
        </>
    );
};

Tree.propTypes = {
    treeData: PropTypes.array,
    onFetchData: PropTypes.func
};

Tree.defaultProps = {
    treeData: []
};
