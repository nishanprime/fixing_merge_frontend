import { MdOutlineDashboard, MdOutlineReviews } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri"
import { IoDocumentTextOutline, IoFastFoodOutline } from "react-icons/io5"
import { BiUserCircle } from "react-icons/bi"
import { HiOutlineUserGroup } from "react-icons/hi"
import { BsGear } from "react-icons/bs"

export const sideMenuItems = [
    {
        name: "Dashboard",
        key: "dashboard",
        url: "/",
        match: "/",
        icon: MdOutlineDashboard
    },
    {
        name: "Auctions",
        key: "auctions",
        url: "/auctions",
        match: "/auctions",
        icon: RiAuctionLine
    },
    {
        name: "Menu Items",
        key: "menu",
        url: "/menu",
        match: "/menu",
        icon: IoFastFoodOutline,
        subMenuItems: [
            {
                name: "Items",
                key: "items",
                url: "/",
                match: "/",
            },
            {
                name: "Categories",
                key: "categories",
                url: "/menu/categories",
                match: "/menu/categories",
            }
        ]
    },
    {
        name: "Customers",
        key: "customers",
        url: "/customers",
        match: "/customers",
        icon: BiUserCircle
    },
    {
        name: "Orders",
        key: "orders",
        url: "/orders",
        match: "/orders",
        icon: IoDocumentTextOutline
    },
    {
        name: "Reviews",
        key: "reviews",
        url: "/reviews",
        match: "/reviews",
        icon: MdOutlineReviews
    },
    {
        name: "Team",
        key: "team",
        url: "/team",
        match: "/team",
        icon: HiOutlineUserGroup
    },
    {
        name: "Settings",
        key: "settings",
        url: "/settings",
        match: "/settings",
        icon: BsGear
    },
]