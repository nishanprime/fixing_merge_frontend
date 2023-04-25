import { useState, useEffect } from "react";
import {
    Box,
    Center,
    Divider,
    Heading,
    Stack,
    Avatar,
    useDisclosure,
    Button,
    Flex,
    Tooltip,
} from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";
import { sideMenuItems } from "bootstrap/config";
import { BiLogOut } from "react-icons/bi";


const Sidebar = () => {
    const sidebarIsOpen = true;

    const [activeMenuIndex, setActiveMenuIndex] = useState(-1);
    const { isOpen, onToggle } = useDisclosure();

    const handleMenuClick = (index: number) => {
        setActiveMenuIndex(index);
        onToggle();
    };
    return (

        <Flex
            minH="100vh"
            direction="column"
            bg="white"
            shadow="xl"
            w={sidebarIsOpen ? "288px" : "80px"}
            position="fixed"
            top="0px"
            zIndex="1000"
            transition="all 100ms ease-in"
            flex="1"
        >
            <Box>
                <Stack
                    direction="row"
                    spacing="10"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* Branding Header */}
                    <Stack direction="row" p="4">
                        <Heading
                            fontSize={["xl", "2xl", "2xl"]}
                            display={sidebarIsOpen ? "block" : "none"}
                        >
                            LOGO
                        </Heading>
                    </Stack>
                </Stack>
                <Box>
                    {sideMenuItems.map((menuItem, index) => (
                        <SidebarItem
                            url={menuItem.url}
                            key={menuItem.key}
                            match={menuItem.match}
                            name={menuItem.name}
                            icon={menuItem.icon}
                            subMenuItems={menuItem.subMenuItems}
                            onClick={() => handleMenuClick(index)}
                        />
                    ))}
                </Box>
            </Box>
            <Box mt="auto" borderColor="black" >
                <Center>
                    <Divider alignSelf="center" />
                </Center>
                <Center>
                    {!sidebarIsOpen ? (
                        <Tooltip label="Log Out" aria-label="Log Out" hasArrow placement="right-start">
                            <Button m="4" p="8px 16px" size="14px" color="red.400" fontWeight="500" alignItems="center" leftIcon={<BiLogOut />} variant="outline" _hover={{ color: "white", bgColor: "red.400" }} />
                        </Tooltip>
                    ) : (
                        <Button m="4" p="8px 16px" size="14px" color="red.400" fontWeight="500" alignItems="center" leftIcon={<BiLogOut />} variant="outline" _hover={{ color: "white", bgColor: "red.400" }}>
                            Log Out
                        </Button>
                    )}
                </Center>
            </Box>
        </Flex>
    );
};

export default Sidebar;