import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Center,
    FormLabel,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

type ForgotPasswordFormInputs = {
    email: string;
};

export default function ForgotPasswordForm(): JSX.Element {
    const router = useRouter();
    const goToLogin = () => {
        router.push("/auth/login");
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Text fontSize="4xl" fontWeight="700" textAlign={'center'}>LOGO</Text>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" textAlign={'center'}>
                    Forgot password?
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')} textAlign={'center'}>
                    No worries, we&apos;ll send you reset instructions.
                </Text>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>

                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'secondary'}
                        color={'black'}
                        _hover={{
                            bg: 'secondary',
                        }}>
                        Request Reset
                    </Button>
                    <Button leftIcon={<IoArrowBack />} textColor={'secondary'} bgColor="white" _hover={{ bgColor: 'secondary', color: 'black' }} onClick={goToLogin}>
                        Back to Login
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}