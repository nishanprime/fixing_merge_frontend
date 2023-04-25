import React, { useState } from "react";
import { Box, Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { Icon, Tooltip } from "@chakra-ui/react"
import { FiChevronRight, FiChevronDown, FiFile } from 'react-icons/fi';

interface SubmenuState {
    [key: string]: boolean;
}

interface SubMenuItem {
    name: string;
    key: string;
    url?: string;
    match?: string;
    subMenuItems?: SubMenuItem[];
    subMenuState?: SubmenuState;
}

interface SidebarItemProps {
    name: string;
    url: string;
    icon?: React.ElementType;
    subMenuItems?: SubMenuItem[];
    match: string;
    onClick?: (event: MouseEvent) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, url, match, icon, subMenuItems }) => {
    const router = useRouter();
    const { pathname } = router;
    const sidebarIsOpen = true;
    const [subMenuState, setSubMenuState] = useState<SubmenuState>({});

    const handleClick = (submenu: any, key: string, url: string | undefined) => {
        if (submenu) {
            setSubMenuState({
                ...subMenuState,
                [key]: !subMenuState[key],
            });
        } else if (url) {
            router.push(url);
        }
    };

    const isActive = (path: string) => {
        return pathname === path || pathname.includes(path);
    };

    const renderSubMenu = (items: SubMenuItem[]) => (
        <UnorderedList px="4" styleType="none">
            {items.map((item) => (
                <>
                    <ListItem
                        key={item.key}
                        p="4px 8px"
                        cursor="pointer"
                        color="black"
                        w="220px"
                        h="36px"
                        float="right"
                        textAlign="center"
                        borderRadius="4px"
                        bgColor="white"
                        my="1px"
                        onClick={() => handleClick(item.subMenuItems, item.key, item.url)}
                        bg={subMenuState[item.key] ? "blackAlpha.200" : ""}
                        _hover={{
                            bg: subMenuState[item.key] ? "" : "secondary",
                            transition: "all .3s ease-out",
                        }}
                    >
                        <Flex align="center">
                            <Text p="1" fontWeight="medium" fontSize="xs">
                                {item.name}
                            </Text>
                            <Box ml="auto" textAlign="right">
                                {item.subMenuItems && (subMenuState[item.key] ? <FiChevronDown /> : <FiChevronRight />)}
                            </Box>
                        </Flex>
                    </ListItem>
                    {sidebarIsOpen && item.subMenuItems && subMenuState[item.key] && renderSubMenu(item.subMenuItems)}

                </>))}
        </UnorderedList >
    );

    return (
        <>
            <Flex
                w={sidebarIsOpen ? "256px" : "50px"}
                h={sidebarIsOpen ? "40px" : "50px"}
                align="center"
                color="black"
                p="8px 16px"
                ml="4"
                my="2"
                borderRadius="4px"
                cursor={subMenuItems ? "pointer" : "default"}
                _hover={{ bg: "secondary", text: "primary" }}
                onClick={() => handleClick(subMenuItems, match, url)}
                justifyContent={sidebarIsOpen ? "left" : "center"}
                bg={isActive(url) ? "secondary" : ""}

            >  {sidebarIsOpen ? (
                <>
                    {icon && <Box as={icon} w="24px" h="24px" color="black" mr="4" />}
                    <Text fontWeight="700" fontSize="16px" mr="4">
                        {name}
                    </Text>
                    {subMenuItems && (
                        <Box ml="auto" textAlign="right">
                            {subMenuState[match] ? <FiChevronDown /> : <FiChevronRight />}
                        </Box>
                    )}
                </>
            ) : (
                <>
                    <Tooltip label={name} aria-label={name} hasArrow placement="right-start">
                        <Box>
                            {icon && <Icon as={icon} w="20px" h="20px" color="black" />}
                        </Box>
                    </Tooltip>
                </>
            )}
            </Flex>
            {sidebarIsOpen && subMenuItems && subMenuState[match] && (
                <>
                    {renderSubMenu(subMenuItems)}
                </>
            )}
        </>
    );
};

export default SidebarItem;