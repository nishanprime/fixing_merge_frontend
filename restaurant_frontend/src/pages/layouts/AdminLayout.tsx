import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import {
  Box,
  Breadcrumb,
  Spinner,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

// Components imports
import Header from '@components/layouts/Header';
import Sidebar from '@components/layouts/Sidebar';
import DateRangePicker from '@components/DateRangePicker';

import { AppContext } from '@contexts/AppProvider';
import Loader from '@components/Loader';
import Redirect from '@components/Redirect';
// import Sidebar from "@components/layouts/Sidebar";
// import Footer from "@components/layouts/Footer";

interface AdminLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const AdminLayout = ({ title, children }: AdminLayoutProps) => {
  const { getRestaurantRequiredInfo, loading, restaurantOwner } =
    useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    getRestaurantRequiredInfo();
  }, []);

  if (loading) return <Loader />;

  if (!restaurantOwner) {
    return <Redirect to="/auth/login" redirect={router.asPath} />;
  }

  const SidebarIsOpen = true;
  return (
    <>
      <Header />
      <Flex flexDirection="row" bg="#FAFAFA">
        <Sidebar />
        <Flex
          // {/* TODO: Sidebar Toggle setup after context */}
          ml={SidebarIsOpen ? '288px' : '80px'}
          w="full"
          minH="100vh"
          p={[2, 2, 5]}
          pt={[2, 2, 5]}
          flexDirection="column"
          pb={['160px', '160px', '100px']}
        >
          <Box mx="4">
            <HStack justifyContent="space-between">
              <Heading>{title}</Heading>
            </HStack>
          </Box>

          {/* TODO: loading state manage after context setup */}
          <Box p="4" minH="100vh">
            {children}
          </Box>
        </Flex>
      </Flex>
      {/* <Footer /> */}
    </>
  );
};

export default AdminLayout;
