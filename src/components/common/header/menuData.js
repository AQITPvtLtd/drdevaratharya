const menuData = [
    {
        id: 1,
        title: "Home",
        path: "/",
        newTab: false
    },
    {
        id: 2,
        title: "About Us",
        path: "/",
        newTab: false
    },
    {
        id: 3,
        title: "Treatments",
        path: "/services",
        newTab: false
    },
    {
        id: 4,
        title: "Type of Cancer",
        newTab: true,
        submenu: [
            {
                id: 41,
                title: "Lung Cancer",
                path: "",
                newTab: false
            },
            {
                id: 42,
                title: "Cervical Cancer",
                path: "",
                newTab: false
            },
            {
                id: 43,
                title: "Prostate Cancer",
                path: "",
                newTab: false
            },
            {
                id: 44,
                title: "Mouth and Oral Cancer",
                path: "",
                newTab: false
            },
            {
                id: 45,
                title: "Colorectal Cancer",
                path: "",
                newTab: false
            },
            {
                id: 46,
                title: "Blood Cancer",
                path: "",
                newTab: false
            },
            {
                id: 47,
                title: "Brain Cancer",
                path: "",
                newTab: false
            },
            {
                id: 48,
                title: "Bone Cancer",
                path: "",
                newTab: false
            },
            {
                id: 49,
                title: "Breast Cancer",
                path: "",
                newTab: false
            },
        ]
    },
    {
        id: 5,
        title: "Blogs",
        path: "/",
        newTab: false
    },
    {
        id: 6,
        title: "Media",
        newTab: true,
        submenu: [
            {
                id: 61,
                title: "Photo Gallery",
                path: "",
                newTab: false
            },
            {
                id: 62,
                title: "Videos ",
                path: "",
                newTab: false
            },

        ]
    },
    {
        id: 7,
        title: "Contact",
        path: "/",
        newTab: false
    },
]
export default menuData;