import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    HStack,
    Switch
} from '@chakra-ui/react';


export default function RestaurantDetails() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    minW="424px"
                    p={8}>
                    <Stack align={'center'} mb="6">
                        <Text>LOGO</Text>
                        <Heading fontSize={'2xl'} fontWeight="700">Restaurant Details</Heading>
                        <Text fontSize={'md'} fontWeight="400" color="#A0AEC0">
                            Tell us about your restaurant
                        </Text>
                    </Stack>
                    <Stack spacing={4}>
                        <Box>
                            <FormControl id="restroName" isRequired>
                                <FormLabel>Restaurant Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="address" isRequired>
                                <FormLabel>Address</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                        <Box >
                            <FormControl id="opening-hours" isRequired>
                                <FormLabel>Opening Hours</FormLabel>
                                <FormControl display='flex' alignItems='center' justifyContent={'space-between'} border={'1px'} borderColor={'gray.200'} p='2' borderRadius={'5px'}>
                                    <FormLabel htmlFor='email-alerts' mb='0'>
                                        same everyday?
                                    </FormLabel>
                                    <Switch id='openinghours' colorScheme={'yellow'} />
                                </FormControl>
                            </FormControl>
                        </Box>
                        {/* TODO: state for range selection data */}
                        <HStack>
                            <Box>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="time"
                                />
                            </Box>
                            <Text>to</Text>
                            <Box>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="time"
                                />
                            </Box>
                        </HStack>
                        <Stack spacing={10} mb={'4'}>
                            <Button
                                bg="secondary"
                                color={'black'}
                                _hover={{
                                    bg: 'secondary',
                                }}>
                                Continue
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}