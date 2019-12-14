const Products = [
    {
        id: 1,
        price: 12,
        formats: ['OBJ', 'FBX', '3ds Max(.max) ver.2020'],
        polygons: 1302,
        vertices: 1330,
        textures: 'Diffuse only',
        uvMapping: 'non overlapping',
        publishData: '2019-11-03',
        title: 'Fantasy Sword Pack',
        desc: 'Styled Swords description',
        licence: 'Royalty free license',
        category: [
            {
                id: 1,
                name: 'Animated',
                value: true,
            },
            {
                id: 2,
                name: 'Rigged',
                value: false,
            }
        ],
        mainImageUrl: 'https://d10frqznkjv786.cloudfront.net/2018/03/07/500174/187049/sword_simple_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1986304_o.png',
        allImages: [
            {
                id: 1,
                url: 'https://assets.pinshape.com/uploads/image/file/147710/container_simple-toy-sword-3d-printing-147710.png',
                title: 'Sword'
            },
            {
                id: 2,
                url: 'https://static.turbosquid.com/Preview/2014/07/06__08_58_35/SimpleSword01.jpg1a1885c5-9a60-4c92-ac70-818b7755fc2dOriginal.jpg',
                title: 'Fantasy Knife'
            },
            {
                id: 3,
                url: 'https://static.turbosquid.com/Preview/2014/07/06__08_58_35/SimpleSword01.jpg1a1885c5-9a60-4c92-ac70-818b7755fc2dOriginal.jpg',
                title: 'Fantasy Sword'
            }
        ]
    }
];

export default Products;