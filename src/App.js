import React, { useState, useEffect } from 'react';
import { isNil } from 'lodash/fp';
import { Tree } from './components/Tree';
import { getInitGroupNode, fetchMultipleRequest, fetchSingleNode } from './util/api.js';
import { composeMultiRequestPayload, composeInitTreeData, updateTree } from './util/helper.js';
import styles from './App.module.css';
import { Icon } from "./components/Icon";
import { SPINNER } from "./common/iconTypes";

function App() {
    const [loaded, setLoaded] = useState(false);
    const [rootNode, setRootNode] = useState(null);
    const [treeData, setTreeData] = useState(null);

    useEffect(()=>{
        getInitGroupNode().then(node => {
            setRootNode(node);
        });
    },[]);

    useEffect(()=>{
        if(rootNode){
          fetchMultipleRequest(composeMultiRequestPayload(rootNode)).then(res=>{
              setTreeData(composeInitTreeData(rootNode, res.response));
              setLoaded(true);
          });
        }
    },[rootNode]);

    const handleFetchData = (uid, isMulti, requestInfo) => {
      if (isNil(isMulti) || isNil(requestInfo)) {
        return;
      }

      if (isMulti) {
          fetchMultipleRequest(requestInfo).then(data => {
            setTreeData(updateTree(treeData, uid, data.response));
          });
      } else {
          fetchSingleNode(requestInfo).then(data => {
            setTreeData(updateTree(treeData, uid, data));
          });
      }
    };

    if (loaded) {
        return (
            <div className="App">
              {treeData &&
                <Tree
                    treeData={treeData}
                    onFetchData={handleFetchData}
                />
              }
            </div>
        );
    } else {
        return (
              <div className={styles.loading}>
                <span><Icon type={SPINNER} /></span>
                <span>Loading... </span>
              </div>
        );
    }
}

export default App;
