import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';

export const SideBarData = [
    {
        title: "Projects",
        icon: <HomeIcon />,
        path: "/projects"
    },
    {
        title: "Add Projects",
        icon: <PostAddIcon />,
        path: "/addproject"
    },
    {
        title: "Logout",
        icon: <LogoutIcon />,
        path: "/logout"
    }
];