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
        url: "/admin/dashboard",
        match: "/admin/dashboard",
        icon: MdOutlineDashboard
    },
    {
        name: "Auctions",
        key: "auctions",
        url: "/admin/auctions",
        match: "/admin/auctions",
        icon: RiAuctionLine
    },
    {
        name: "Menu Items",
        key: "menu",
        url: "/admin/menu",
        match: "/admin/menu",
        icon: IoFastFoodOutline,
        subMenuItems: [
            {
                name: "Items",
                key: "items",
                url: "/admin/menu/items",
                match: "/",
            },
            {
                name: "Categories",
                key: "categories",
                url: "/admin/menu/categories",
                match: "/admin/menu/categories",
            }
        ]
    },
    {
        name: "Customers",
        key: "customers",
        url: "/admin/customers",
        match: "/admin/customers",
        icon: BiUserCircle
    },
    {
        name: "Orders",
        key: "orders",
        url: "/admin/orders",
        match: "/admin/orders",
        icon: IoDocumentTextOutline
    },
    {
        name: "Reviews",
        key: "reviews",
        url: "/admin/reviews",
        match: "/admin/reviews",
        icon: MdOutlineReviews
    },
    {
        name: "Team",
        key: "team",
        url: "/admin/team",
        match: "/admin/team",
        icon: HiOutlineUserGroup
    },
    {
        name: "Settings",
        key: "settings",
        url: "/admin/settings",
        match: "/admin/settings",
        icon: BsGear
    },
]