import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArticleIcon from "@mui/icons-material/Article";

export const SideBarData = [
    {
        title: "Projects",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        title: "My Projects",
        icon: <ArticleIcon />,
        path: "/projects"
    },
    {
        title: "Add Projects",
        icon: <PostAddIcon />,
        path: "/addproject"
    }
];