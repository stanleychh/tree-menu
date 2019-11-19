import { composeMultiRequestPayload, transformSingleAsset, transformMultiAssets, composeInitTreeData } from './helper';

describe('helper', () => {
    describe('transformSingleAsset', () => {
        it('should return transformed object if `asset` is provided', () => {
            const asset = {
                assets: [
                    {
                        caption: "Foo",
                        tclass: "group",
                        type: "Ref",
                        uid: "GR_EDB1100F21FABCBD"
                    },{
                        caption: "Bar",
                        tclass: "group",
                        type: "Ref",
                        uid: "GR_EDB2237FBCBD21FA"
                    }
                ],
                caption: "1709 - On Premise Tutorials Repository",
                modified_by: "D002662 (Ronald Bueck)",
                tclass: "group",
                uid: "GR_5720D62B54031C8B"
            };
            const actual = transformSingleAsset(asset);

            const expected = {
                uid: 'GR_5720D62B54031C8B',
                isMulti: true,
                tclass: 'group',
                caption: '1709 - On Premise Tutorials Repository',
                requestInfo: {
                    request: [
                        { method: "GET", url: "group/GR_EDB1100F21FABCBD/entity.txt", body: "{}" },
                        { method: "GET", url: "group/GR_EDB2237FBCBD21FA/entity.txt", body: "{}" }
                    ]
                }
            };
            expect(actual).toMatchObject(expected);
        });
    });

    describe('composeMultiRequestPayload', () => {
        it('should return transformed request array if `data` is provided', () => {
            const data = {
                assets: [
                    {
                        caption: "Foo",
                        tclass: "group",
                        type: "Ref",
                        uid: "GR_77ADDB803B8EB893",
                        wt_acquired: 0,
                        zombie: false
                    }, {
                        caption: "bar",
                        tclass: "group",
                        type: "Ref",
                        uid: "GR_46210804180A2CAE",
                        wt_acquired: 0,
                        zombie: false
                    }
                ]
            };
            const actual = composeMultiRequestPayload(data);

            const expected = {
                request: [
                    { method: "GET", url: "group/GR_77ADDB803B8EB893/entity.txt", body: "{}" },
                    { method: "GET", url: "group/GR_46210804180A2CAE/entity.txt", body: "{}" }
                ]
            };
            expect(actual).toMatchObject(expected);
        });
    });

    describe('transformMultiAssets', () => {
        it('should return transformed payload if `data` is provided', () => {
            const data = [
                    {
                        assets: [{
                            type: "Ref",
                            tclass: "group",
                            uid: "GR_5720D62B54031C8B",
                            caption: "foo1"
                        }],
                        caption: "Foo",
                        tclass: "group",
                        type: "Ref",
                        uid: "GR_77ADDB803B8EB893"
                    }, {
                        assets: [{
                            type: "Ref",
                            tclass: "group",
                            uid: "GR_863756A5A8DA1C9E",
                            caption: "bar1"
                        }],
                        caption: "bar",
                        tclass: "group",
                        type: "Ref",
                        uid: "GR_46210804180A2CAE",
                        wt_acquired: 0,
                        zombie: false
                    }
                ];
            const actual = transformMultiAssets(data);

            const expected = [
                    {
                        caption: "Foo",
                        isMulti: false,
                        requestInfo: "https://education.hana.ondemand.com/education/pub/s4/group/GR_5720D62B54031C8B/entity.txt",
                        tclass: "group",
                        uid: "GR_77ADDB803B8EB893"
                    },
                    {
                        caption: "bar",
                        isMulti: false,
                        requestInfo: "https://education.hana.ondemand.com/education/pub/s4/group/GR_863756A5A8DA1C9E/entity.txt",
                        tclass: "group",
                        uid: "GR_46210804180A2CAE"
                    }
                ];

            expect(actual).toMatchObject(expected);
        });
    });

    describe('composeInitTreeData', () => {
        it('should return composed tree data', () => {
            const rootNode = {
                assets: [],
                caption: "Content - Server",
                tclass: "group",
                uid: "GR_5B103DE89EE75A1F8"
            };
            const assets = [
                {
                    assets: [{
                        type: "Ref",
                        tclass: "group",
                        uid: "GR_5720D62B54031C8B",
                        caption: "foo1"
                    }],
                    caption: "Foo",
                    tclass: "group",
                    type: "Ref",
                    uid: "GR_77ADDB803B8EB893"
                }, {
                    assets: [{
                        type: "Ref",
                        tclass: "group",
                        uid: "GR_863756A5A8DA1C9E",
                        caption: "bar1"
                    }],
                    caption: "bar",
                    tclass: "group",
                    type: "Ref",
                    uid: "GR_46210804180A2CAE",
                    wt_acquired: 0,
                    zombie: false
                }
            ];
            const actual = composeInitTreeData(rootNode, assets);

            const expected = [
                {
                    assets: [
                        {
                            caption: "Foo",
                            isMulti: false,
                            requestInfo: "https://education.hana.ondemand.com/education/pub/s4/group/GR_5720D62B54031C8B/entity.txt",
                            tclass: "group",
                            uid: "GR_77ADDB803B8EB893"
                        },
                        {
                            caption: "bar",
                            isMulti: false,
                            requestInfo: "https://education.hana.ondemand.com/education/pub/s4/group/GR_863756A5A8DA1C9E/entity.txt",
                            tclass: "group",
                            uid: "GR_46210804180A2CAE"
                        }
                    ],
                    caption: "Content - Server",
                    tclass: "group",
                    uid: "GR_5B103DE89EE75A1F8"
                }
            ];

            expect(actual).toMatchObject(expected);
        });
    });
});
