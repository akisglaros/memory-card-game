import _ from 'lodash';

export const getPhotos = () => {
    const photoUrls = [
        {
            id: '1',
            uniqueId: '0000001',
            url: "https://images.unsplash.com/photo-1561553141-f9a26dbee108?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '2',
            uniqueId: '0000002',
            url: "https://images.unsplash.com/photo-1562859135-3c009b776595?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '3',
            uniqueId: '0000003',
            url: "https://images.unsplash.com/photo-1561538286-b4561e7956c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '4',
            uniqueId: '0000004',
            url: "https://images.unsplash.com/photo-1563203156-aec33354ff15?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '5',
            uniqueId: '0000005',
            url: "https://images.unsplash.com/photo-1562961799-8e7ea406c781?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '6',
            uniqueId: '0000006',
            url: "https://images.unsplash.com/photo-1562696088-1deb812c0ac4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '7',
            uniqueId: '0000007',
            url: "https://images.unsplash.com/photo-1562337589-136d8a7dd9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '8',
            uniqueId: '0000008',
            url: "https://images.unsplash.com/photo-1561002088-2d9ca399aa7d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ"
        },
        {
            id: '1',
            uniqueId: '0000009',
            url: "https://images.unsplash.com/photo-1561553141-f9a26dbee108?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '2',
            uniqueId: '0000010',
            url: "https://images.unsplash.com/photo-1562859135-3c009b776595?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '3',
            uniqueId: '0000011',
            url: "https://images.unsplash.com/photo-1561538286-b4561e7956c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '4',
            uniqueId: '0000012',
            url: "https://images.unsplash.com/photo-1563203156-aec33354ff15?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '5',
            uniqueId: '0000013',
            url: "https://images.unsplash.com/photo-1562961799-8e7ea406c781?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '6',
            uniqueId: '0000014',
            url: "https://images.unsplash.com/photo-1562696088-1deb812c0ac4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '7',
            uniqueId: '0000015',
            url: "https://images.unsplash.com/photo-1562337589-136d8a7dd9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ",
        },
        {
            id: '8',
            uniqueId: '0000016',
            url: "https://images.unsplash.com/photo-1561002088-2d9ca399aa7d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjc4MTc0fQ"
        },
    ];

    return _.chunk(_.shuffle(photoUrls), 4);
};
