import { Box, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import DashCard from '@components/DashCard';
import AdminLayout from 'pages/layouts/AdminLayout';
import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaWeightHanging } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { MdPeople } from 'react-icons/md';
import { RiAuctionFill } from 'react-icons/ri';
import Table from "@components/CardContainer"
import CardContainer from '@components/CardContainer';
import FBTable from '@components/FBTable';
import DashMenu from '@components/DashMenu';


const Dashcards = [{
    title: "Turnover",
    stat: "$100,000",
    percent: -37.73,
    icon: < BsCurrencyDollar />,
}, {
    title: "Food Wastage Saved",
    stat: "100 Kgs",
    percent: 87.05,
    icon: < FaWeightHanging />,
}, {
    title: "Cardbon Footprint Reduced",
    stat: "100 Kgs",
    percent: 12.9,
    icon: < FaWeightHanging />,
}, {
    title: "Active Auctions",
    stat: "10",
    percent: 16.32,
    icon: < RiAuctionFill />,
}, {
    title: "Total Menu Items",
    stat: "999",
    percent: 29.98,
    icon: < IoFastFood />,
}, {
    title: "Registered Customers",
    stat: "100,000",
    percent: 64.46,
    icon: < MdPeople />,
}]


const auctionData = {
    header: ["Auction Name", "Highest Bidder", "Time Remaining", "Current Bid"],
    rows: [["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 1", "Joohn Doe", "04:00", "$100"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"], ["Auction 2", "Superman", "12:40", "$20"]]
}

const salesData = {
    header: [],
    rows: [["Batman", "$20"], ["Superman", "$10"], ["Wonderwomen", "$20"], ["Flash", "$20"], ["Robin", "$20"]]
}
export const Dashboard = () => {
    return (<>
        <><Box>
            {/* Dashcards */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                {Dashcards.map((dashcard, index) => (
                    <>
                        <DashCard key={index} title={dashcard.title} stat={dashcard.stat} percent={dashcard.percent} icon={dashcard.icon} />
                    </>
                ))}
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} my="8">
                <Box gridColumn="span 2">
                    <VStack>
                        <CardContainer title="Auction Overview">
                            <FBTable mt="4" tableData={auctionData} maxData={11} size="md" tdHeight="48px" />
                        </CardContainer>
                    </VStack>
                </Box>
                <Box >
                    <VStack>
                        <CardContainer title="Recent Sales">
                            <FBTable mt="4" tableData={salesData} maxData={5} tdHeight="41px" />
                        </CardContainer>
                        <CardContainer title="Menu" >
                            <DashMenu />
                        </CardContainer>
                    </VStack>
                </Box>
            </SimpleGrid>
        </Box>
        </>
    </>
    )
}



Dashboard.layout = () => {
    return (
        <AdminLayout title="Dashboard">
            <Dashboard />
        </AdminLayout>
    );
};
export default Dashboard;