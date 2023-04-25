import { Box, Card, Flex, HStack, Icon, IconProps, Stat, StatArrow, StatDownArrow, StatLabel, StatNumber, StatUpArrow, Text, VStack } from '@chakra-ui/react'
import React from 'react';

interface DashCardProps {
    title: string;
    stat: string;
    percent: number;
    // TODO: Type fix
    icon: any;
}
const DashCard = ({ title, stat, percent, icon }: DashCardProps) => {
    const increase = true;
    return (
        <>
            <Stat
                px={{ base: 4, md: 6 }}
                py={'4'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={'gray.200'}
                rounded={'sm'}>
                <Flex justifyContent={'space-between'}>
                    <Box p="4" my="2" bgColor={'#1635AC1A'} borderRadius={'full'}>
                        <Box fontSize={'xl'} color={'gray.500'} >
                            {icon}
                        </Box>
                    </Box>
                    <HStack color={percent > 0 ? 'green' : 'red'}>
                        <Icon as={percent > 0 ? StatUpArrow : StatDownArrow} />
                        <Text fontWeight="600">{Math.abs(percent)} %</Text>
                    </HStack>
                </Flex>
                <StatNumber fontSize={'2xl'} fontWeight={'700'}>
                    {stat}
                </StatNumber>
                <StatLabel fontWeight={'md'} isTruncated>
                    {title}
                </StatLabel>
            </Stat>
        </>
    )
}

export default DashCard