import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";


export const AdminSideData = [
  {
    title: "Projects",
    icon: <HomeIcon />,
    path: "/admin",
  },

  {
    title: "Add Projects",
    icon: <PostAddIcon />,
    path: "/admin/add",
  },
  {
    title: "Cohorts",
    icon: <GroupsIcon />,
    path: "/cohort",
  },
  {
    title: "users",
    icon: <AccountCircleIcon />,
    path: "/user",
  },
];
