import { SINGLE_GROUP_ENDPOINT } from '../common/constants.js';

export const composeMultiRequestPayload = ({ assets }) => {
    const assetList = assets.map(asset => {
        const { uid, tclass } = asset;
        const url = `${tclass}/${uid}/entity.txt`;

        return { method: "GET", url, body: "{}" }
    });

    return { request: assetList }
};

const transformSingleAsset = (asset) => {
    const { uid, tclass, caption, assets } = asset;
    let requestInfo, isMulti;

    if (assets.length === 1) {
        requestInfo = SINGLE_GROUP_ENDPOINT(assets[0].uid);
        isMulti = false;
    } else {
        requestInfo = composeMultiRequestPayload({assets});
        isMulti = true;
    }

    return { uid, tclass, caption, requestInfo, isMulti };
};

const transformMultiAsset = (assets) => assets.map(asset => transformSingleAsset(asset));

export const composeInitTreeData = ({uid, tclass, caption}, assets) => [{ uid, tclass, caption, assets: transformMultiAsset(assets) }];

export const updateTree = (originalTree, uid, extraAsset) => {
    const mutatedTree = [...originalTree];

    addAsset(mutatedTree, uid, extraAsset);

    return mutatedTree;
};

const addAsset = (tree, uid, extraAsset) => {
    tree.forEach(node => {
        if (node.uid === uid) {
            if (Array.isArray(extraAsset)) {
                node.assets = transformMultiAsset(extraAsset);
            } else {
                node.assets = [transformSingleAsset(extraAsset)];
            }
        }

        if (node.hasOwnProperty('assets')) {
            return addAsset(node.assets, uid, extraAsset);
        }
    });
};
