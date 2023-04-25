import React from 'react'
import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

const DashMenu = () => {
    return (
        <>
            <Center py={6}>
                <Box
                    w="full">
                    <Box
                        h={'200px'}
                        bg={'gray.100'}
                        mt={-4}
                        mx={-4}
                        mb={6}
                        pos={'relative'}
                        overflow={'hidden'}>
                        <Image
                            src="/pizza.png"
                            alt="Demo Menu"
                            width={500}
                            height={500}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'} justifyContent={'space-between'}>
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={500} color={'gray.700'}>Pineapple Pizza</Text>
                            <Text color={'gray.500'}>Salad vegetable mix with Salmon and egg</Text>
                        </Stack>
                        <Stack direction={'column'} spacing={0} fontSize={'sm'} >
                            <Text fontWeight={700} color={'blackAlpha.900'} fontSize={'lg'}>$20.70</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Center >
        </>
    )
}

export default DashMenu