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
        path: "/about",
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
                path: "/typeofcancer/lung_cancer",
                newTab: false
            },
            {
                id: 42,
                title: "Cervical Cancer",
                path: "/typeofcancer/cervical_cancer",
                newTab: false
            },
            {
                id: 43,
                title: "Prostate Cancer",
                path: "/typeofcancer/prostate_cancer",
                newTab: false
            },
            {
                id: 44,
                title: "Mouth and Oral Cancer",
                path: "/typeofcancer/mouth_cancer",
                newTab: false
            },
            {
                id: 45,
                title: "Colorectal Cancer",
                path: "/typeofcancer/colorectal_cancer",
                newTab: false
            },
            {
                id: 46,
                title: "Blood Cancer",
                path: "/typeofcancer/blood_cancer",
                newTab: false
            },
            {
                id: 47,
                title: "Brain Cancer",
                path: "/typeofcancer/brain_cancer",
                newTab: false
            },
            {
                id: 48,
                title: "Bone Cancer",
                path: "/typeofcancer/bone_cancer",
                newTab: false
            },
            {
                id: 49,
                title: "Breast Cancer",
                path: "/typeofcancer/breast_cancer",
                newTab: false
            },
        ]
    },
    {
        id: 5,
        title: "Blogs",
        path: "/blogs",
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
                path: "/media/gallery",
                newTab: false
            },
            {
                id: 62,
                title: "Videos ",
                path: "/media/videos",
                newTab: false
            },

        ]
    },
    {
        id: 7,
        title: "Contact",
        path: "/contact",
        newTab: false
    },
]
export default menuData;