import {
    ROOT_NODE,
    SINGLE_GROUP_ENDPOINT,
    MULTIPLE_REQUEST_ENDPOINT
} from '../common/constants.js';

export const getRootNode = async () => {
    return await (await fetch(ROOT_NODE)).json();
};

export const fetchSingleNode = async (url) => {
    return await (await fetch(url)).json();
};

export const getInitGroupNode = async () => {
    const { root } = await getRootNode();

    return await fetchSingleNode(SINGLE_GROUP_ENDPOINT(root.uid));
};

export const fetchMultipleRequest = async (postData) => {
    return await postRequest(MULTIPLE_REQUEST_ENDPOINT, postData);
};

async function postRequest(url = '', data = {}) {
    try {
        const settings = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
        };
        const response = await fetch(url, settings);
        return await response.json();
    } catch (e) {
        return e;
    }
}
