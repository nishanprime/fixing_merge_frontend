import React, { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import Link from "next/link";
import {
    Flex, Avatar, Heading, Stack, Button, Select, Menu, Center,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Divider,
    HStack,
    VStack,
    Text,
    IconButton,
    InputGroup,
    InputLeftElement,
    Input,
    Box,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    FiBell,
    FiChevronDown,
} from "react-icons/fi"


const Header = () => {
    // TODO: cleanup after context setup
    const sidebarIsOpen = true;
    return (
        <Flex
            // TODO: sidebar context
            w={sidebarIsOpen ? ["full", "calc(100vw - 288px)", "calc(100vw - 288px)", "calc(100vw - 288px)"] : ["calc(100vw - 80px)", "calc(100vw - 80px)"]}
            p="6"
            bg="white"
            boxShadow="base"
            justify="space-between"
            align="center"
            position="sticky"
            top="0px"
            h="80px"
            left="288px"
            textColor={"primary"}
            zIndex="99"
        >

            {/* topbar-left */}
            < Stack direction="row" spacing="20" >
                {/* Branding Header */}
                <IconButton aria-label='Sidebar Menu' icon={<GiHamburgerMenu fontSize="24px" />} ml="2" bgColor="white" _hover={{ bgColor: "secondary", color: "black" }} />
                < Stack alignItems="center" direction="row">
                    < Stack direction={"row"} borderRadius={40} textColor="black" align={"center"} mx="4" w="662px" >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<AiOutlineSearch color='gray.300' />}
                            />
                            <Input type='text' placeholder='Search' />
                        </InputGroup>
                    </Stack >
                </Stack >
            </Stack >
            {/* Header Right Content */}

            < Stack direction={"row"} >
                {/* icons */}
                <HStack spacing={{ base: '0', md: '6' }}>
                    {/* portfolio avatar */}
                    <Button leftIcon={<AiOutlinePlus />} color='black' bgColor="secondary" variant='solid' size="md" colorScheme="yellow">
                        New Auction
                    </Button>
                    <IconButton
                        size="lg"
                        variant="ghost"
                        aria-label="open menu"
                        icon={<FiBell />}
                    />
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                py={2}
                                transition="all 0.3s"
                                _focus={{ boxShadow: 'none' }}>
                                <HStack>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                    <VStack
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2">
                                        <Text fontSize="md" fontWeight="700">Miles Morales</Text>
                                        <Text fontSize="sm" color="gray.600">
                                            Owner
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: 'none', md: 'flex' }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuDivider />
                                <MenuItem>Sign out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack >

            </Stack >
        </Flex >
    );
};

export default Header;