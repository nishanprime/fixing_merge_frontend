import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

interface TableProps {
    title: string;
    // TODO: type fix 
    children: any;
}
const CardContainer = ({ title, children }: TableProps) => {
    return (
        <>
            <Box bgColor={'white'} p="4" w="100%" boxShadow={'md'}>
                <Flex flexDirection="row" justifyContent="space-between">
                    <Text fontWeight={700} size="14px">{title}</Text>
                    <Link href="/admin/auctions"><Text color="#1877F2" fontWeight={400}>View All</Text></Link>
                </Flex>
                <Box>
                    {children}
                </Box>
            </Box >
        </>
    )
}

export default CardContainer